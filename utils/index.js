export async function storefront(query, variables = {}) {
  const URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2022-01/graphql.json`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Shopify-Storefront-Access-Token":
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESSTOKEN,
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });
    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export function formatPrice(number) {
  return Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 1,
  }).format(number);
}
