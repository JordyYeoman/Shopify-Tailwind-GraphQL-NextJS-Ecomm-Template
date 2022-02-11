import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import ProductsPanel from "../components/ProductsPanel";
import Footer from "../components/Footer";

{
  /* <div className={styles.container}></div>; */
}

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <ProductsPanel />
      <Footer />
    </>
  );
}
