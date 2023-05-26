import Head from "next/head";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import ProductProvider from "@/context/ProductContext";

export default function App({ Component, pageProps }: any) {
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
