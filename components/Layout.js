import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createContext, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ProductsPanel from "../components/ProductsPanel";
import Footer from "../components/Footer";

export const ProductsContext = createContext();

export default function Layout({ children }) {
  const [context, setContext] = useState(null);
  return (
    <>
      <ProductsContext.Provider value={[context, setContext]}>
        <Head />
        <NavigationBar />
        <main>{children}</main>
        <ProductsPanel />
        <Footer />
      </ProductsContext.Provider>
    </>
  );
}
