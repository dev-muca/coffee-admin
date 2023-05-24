import { Navbar } from "@/components/Navbar/Navbar";
import ProductProvider from "@/context/ProductContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Macieul's Coffee • Painel Administrativo</title>
      </Head>
      <Navbar />
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </>
  );
}
