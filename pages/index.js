import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { storefront } from "../utils/index";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import ProductsPanel from "../components/ProductsPanel";
import ProductQuickView from "../components/ProductQuickView";
import CenteredFourItemGridCTA from "../components/CenteredFourItemGridCTA";
import SmallCTA from "../components/SmallCTA";
import ProductPreviewCTA from "../components/ProductPreviewCTA";
import ProductList from "../components/ProductList";
import CollectionsList from "../components/CollectionsList";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

{
  /* <div className={styles.container}></div>; */
}

export default function Home() {
  return (
    <>
      <Head />
      <NavigationBar />
      <Hero />
      <ProductList />
      <ProductPreviewCTA />
      <CenteredFourItemGridCTA />
      {/* // Need to pass toggle for modal view */}
      <ProductQuickView />
      <ProductsPanel />
      <CollectionsList />
      <SmallCTA />
      <ContactForm />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await storefront(productsQuery);
  console.log(data);
  return {
    props: {
      // products
      products: data.products,
    },
  };
}
const gql = String.raw;
const productsQuery = gql`
  query Products {
    products(first: 50) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;
