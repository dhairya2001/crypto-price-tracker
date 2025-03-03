import styles from "../styles/Home.module.css"; // Import home page styles
import CryptoList from "../components/CryptoList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Query Client
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.pageContainer}>
        <CryptoList />
      </div>
    </QueryClientProvider>
  );
}
