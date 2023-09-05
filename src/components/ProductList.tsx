import ProductCard from "./ProductCard";

const ProductList = ({ products }: any) => {
  return (
    <div className="grid grid-cols-3 gap-[1.45vw]">
      {products.map((product: any) => (
        <ProductCard product={product} key={product.node.id}/>
      ))}
    </div>
  );
};

export default ProductList;
