import axios from "axios";

const CRYPTO_API_URL = "https://api.coincap.io/v2/assets";
const CURRENCY_API_URL = "https://api.exchangerate-api.com/v4/latest/USD"; // ✅ Get exchange rates for conversion

export const fetchCryptoPrices = async (currency = "usd") => {
  try {
    // Fetch cryptocurrency prices in USD
    const { data } = await axios.get(CRYPTO_API_URL);

    // Extract only the relevant cryptocurrencies
    const filteredData = data.data.filter((coin: any) =>
      ["bitcoin", "ethereum", "binance-coin", "tether", "solana"].includes(coin.id)
    );

    // Fetch exchange rates for currency conversion
    const currencyResponse = await axios.get(CURRENCY_API_URL);
    const exchangeRates = currencyResponse.data.rates; // ✅ Contains USD → EUR, GBP, etc.

    // Convert prices to the selected currency
    const formattedData: { [key: string]: { [key: string]: number } } = {};
    filteredData.forEach((coin: any) => {
      const usdPrice = parseFloat(coin.priceUsd);
      formattedData[coin.id] = {
        usd: usdPrice,
        eur: usdPrice * (exchangeRates["EUR"] || 1), // ✅ Convert to EUR
        gbp: usdPrice * (exchangeRates["GBP"] || 1), // ✅ Convert to GBP
      };
    });

    console.log("Formatted Crypto Data:", formattedData); // Debugging
    return formattedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
};
