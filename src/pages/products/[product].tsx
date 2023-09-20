import ProductPageContent from "@/components/ProductPageContent";
import { getAllProducts, getProduct } from "../api/shopify";

export default function ProductPage({ product }: any) {
  return <div>
    <ProductPageContent product={product} />
  </div>;
}

// export default ProductPage

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item: any) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
    const product = await getProduct(params.product);
  
    return {
      props: {
        product,
      },
    };
  }
