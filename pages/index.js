import Hero from "../components/Hero";
import ProductQuickView from "../components/ProductQuickView";
import CenteredFourItemGridCTA from "../components/CenteredFourItemGridCTA";
import SmallCTA from "../components/SmallCTA";
import { storefront } from "../utils/index";
import ProductPreviewCTA from "../components/ProductPreviewCTA";
import ProductList from "../components/ProductList";
import CollectionsList from "../components/CollectionsList";
import BasicSmallCTA from "../components/BasicSmallCTA";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../components/Layout";

{
  /* <div className={styles.container}></div>; */
}

export default function Home({ products }) {
  const [context, setContext] = useContext(ProductsContext);
  useEffect(() => {
    setContext(products);
  }, []);

  return (
    <>
      <Hero />
      <BasicSmallCTA />
      <ProductList />
      <CenteredFourItemGridCTA />
      <CollectionsList />
      {/* <ProductPreviewCTA /> */}
      {/* // Need to pass toggle for modal view */}
      <ProductQuickView />
      <SmallCTA />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await storefront(productsQuery);
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
    products(first: 40) {
      edges {
        node {
          title
          handle
          tags
          onlineStoreUrl
          id
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
