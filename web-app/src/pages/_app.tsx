import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Crypto Price Tracker 💰</title>
        <link rel="icon" href="https://iconduck.com/icons/82093/bitcoin-cryptocurrency?shared" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
