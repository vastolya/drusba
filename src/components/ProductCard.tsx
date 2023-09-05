import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

const MontserratBold = localFont({
  src: "../../public/fonts/Montserrat-Bold.ttf",
});
const MontserratRegular = localFont({
  src: "../../public/fonts/Montserrat-Regular.ttf",
});

const ProductCard = ({ product }:any ) => {
  
  const { handle, title, description } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/product/${handle}`} className="mx-auto">
      {/* <div className="w-[382px] h-[487px]  bg-[#FE6A3A] rounded-lg relative z-100 overflow-hidden"> */}
      <div className="w-[19.89vw] min-h-[45,09vh] h-full  bg-[#FE6A3A] rounded-lg relative z-100 overflow-hidden">
        <Image
          src={originalSrc}
          alt={altText}
          width={1000}
          height={1000}
          className="h-[26.11vh] w-full object-cover "
          // "h-[282px] hover:h-full transition-all w-full object-cover"
        />
        <div className={MontserratBold.className}>
          <h2 className="text-[24px] md:text-[2.22vh] text-white pt-[2.22vh] mx-[1.45vw]">
            {title}
          </h2>
        </div>

        <h2 className="text-[16px] md:text-[1.48vh] text-[#3C3C43] pt-[5px] mx-[1.45vw]">
          <p className={MontserratRegular.className}>{description}</p>
        </h2>

        <h2 className="text-[29px] md:text-[1.48vw] text-[#3C3C43] pt-[1.66vh] pl-[1.45vw] pb-[1.66vh] invisible">
          <p className={MontserratBold.className}>{Math.round(price)}&nbsp;₽</p>
        </h2>
        <h2 className="text-[29px] md:text-[1.48vw] text-[#3C3C43] absolute bottom-[1.11vh] left-[1.45vw]">
          <p className={MontserratBold.className}>{Math.round(price)}&nbsp;₽</p>
        </h2>
      </div>
    </Link>
  );
};

export default ProductCard;
