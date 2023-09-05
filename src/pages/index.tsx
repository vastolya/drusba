import Image from "next/image";
import localFont from "next/font/local";

import { getProductsInCollection } from "./api/shopify";

import { Header } from "../components/Header";
import Main from "../components/Main";
import ProductList from "@/components/ProductList";
import GlobeImg from "../../public/pics/globe.png";
import Footer from "@/components/Footer";

const nextArtFont = localFont({ src: "../../public/fonts/NEXT_ART_Bold.otf" });
const MontserratBold = localFont({
  src: "../../public/fonts/Montserrat-Bold.ttf",
});
const MontserratRegular = localFont({
  src: "../../public/fonts/Montserrat-Regular.ttf",
});

interface Product {
  node: {
    id: string;
    title: string;
    handle: string;
    description: string;
    priceRange: {
      minVariantPrice: {
        amount: number;
      };
    };
    images: {
      edges: {
        node: {
          originalSrc: string;
          altText: string;
        };
      }[];
    };
  };
}

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  console.log(products);

  return (
    <main className="w-full mx-auto overflow-hidden">
      <Header />
      <Main />

      <div className={MontserratBold.className}>
        <h2 className="pt-[659px] text-center text-[45px] leading-[68px]">
          ДОСТАВКА АБСУРДА: РАССКРЫВАЯ ПУТЬ
          <br /> ИСКУССТВА ЧЕРЕЗ СЛОИ ИСПЫТАНИЙ
        </h2>
      </div>
      <div className="w-[1440px] mx-auto flex">
        <Image
          src={GlobeImg}
          alt={"GlobeImg"}
          width={319}
          height={0}
          className="ml-[88px] h-[484px] select-none"
        ></Image>
        <div className={MontserratRegular.className}>
          <h2 className="ml-[33px] mt-[32px] text-[30px] leading-[54px] relative z-50">
            Добро пожаловать в мир «Службы Доставки Абсурда»!
            <br />
            Мы специализируемся на доставке современного
            <br />
            искусства между Россией и Западом. Наши товары -<br />
            уникальные произведения, адресованные
            <br />
            знаменитостям, но не дошедшие до них по разным
            <br />
            причинам. Они вернулись на наш склад и готовы
            <br />
            покорить вас своей ценностью, созданной через
            <br />
            сложные пути доставки. Получите искусство абсурда
            <br />
            прямо сейчас по невероятным ценам!
          </h2>
        </div>
      </div>

      <div className="mx-4 mt-[120px] md:my-[11.11vh] md:mx-[18.75vw]">
        <ProductList products={products} />
      </div>

      

      <Footer/>
    </main>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: {
      products,
    },
  };
}
