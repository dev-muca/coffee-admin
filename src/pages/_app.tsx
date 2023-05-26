import Head from "next/head";
import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/Navbar/Navbar";
import ProductProvider from "@/context/ProductContext";

export default function App({ Component, ...pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Macieul's Coffee • Painel Administrativo</title>
      </Head>
      <ProductProvider>
        <Navbar />
        <Component {...pageProps} />
      </ProductProvider>
    </>
  );
}
