import ProductCard from "./ProductCard";

const ProductList = ({ products }: any) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 md:gap-[1.45vw]">
      {products.map((product: any) => (
        <ProductCard product={product} key={product.node.id}/>
      ))}
    </div>
  );
};

export default ProductList;
