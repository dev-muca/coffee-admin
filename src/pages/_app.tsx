import { Navbar } from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Macieul's Coffee</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
