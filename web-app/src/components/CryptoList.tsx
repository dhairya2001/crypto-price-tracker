import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoPrices } from "../utils/fetchCrypto";
import styles from "./CryptoList.module.css";

export default function CryptoList() {
  const [currency, setCurrency] = useState("usd");
  const [search, setSearch] = useState("");

  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["cryptoPrices", currency],
    queryFn: () => fetchCryptoPrices(currency),
    refetchInterval: 60000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 0,
  });

  return (
    <div className={styles.cardContainer}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>📊 Live Crypto Prices</h2>

          {/* Currency Selector */}
          <select
            className={styles.dropdown}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="usd">USD ($)</option>
            <option value="eur">EUR (€)</option>
            <option value="gbp">GBP (£)</option>
          </select>

          {/* Search Box */}
          <input
            className={styles.search}
            type="text"
            placeholder="🔎 Search crypto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Crypto Prices Table */}
          <div className={styles.table}>
            {isLoading ? (
              <p className={styles.loading}>⏳ Loading prices...</p>
            ) : error ? (
              <p className={styles.error}>⚠️ Failed to load data</p>
            ) : (
              Object.entries(data || {})
                .filter(([key]) => key.toLowerCase().includes(search.toLowerCase()))
                .map(([key, value]: [string, { [key: string]: number }]) => (
                  <div key={key} className={styles.row}>
                    <span className={styles.crypto}>{key}</span>
                    <span className={styles.price}>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: currency.toUpperCase(),
                      }).format(value[currency])}
                    </span>
                  </div>
                ))
            )}
          </div>

          {/* Refresh Button */}
          <button
            className={styles.refreshButton}
            onClick={() => refetch()}
            disabled={isFetching}
          >
            {isFetching ? "🔄 Refreshing..." : "🔄 Refresh"}
          </button>
        </div>
      </div>
    </div>
  );
}
