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

      <div className="md:mx-[18.75vw] mt-12 md:mt-0">
        <Main />
      </div>

      <div className=" md:mt-[2.11vh] mx-6 md:mx-[18.75vw]">
        <div className={MontserratBold.className}>
          <h2 className=" text-center pt-[500px] md:pt-[61.11vh] text-2xl leading-[38px] md:text-[4.16vh] md:leading-[6.29vh]">
            ДОСТАВКА АБСУРДА: РАССКРЫВАЯ ПУТЬ
            <br /> ИСКУССТВА ЧЕРЕЗ СЛОИ ИСПЫТАНИЙ
          </h2>
        </div>
      </div>

      <div className=" md:my-[5.55vh] mx-6 md:mx-[18.75vw]">
        <div className="flex w-full">
          <Image
            src={GlobeImg}
            alt={"GlobeImg"}
            width={1000}
            height={1000}
            className="hidden md:block md:w-[16.61vw] md:h-[44.81vh] select-none object-cover"
          ></Image>
          <div className="">
            <div className="pt-9 md:pt-0 ml-[1.66vw] md:mt-[3.4vh] text-[16px] md:text-[2.77vh]  leading-7 md:leading-[5vh] relative z-50">
              <p className={MontserratRegular.className}>
                Добро пожаловать в мир «Службы Доставки Абсурда»! Мы
                специализируемся на доставке современного искусства между
                Россией и Западом. Наши товары - уникальные произведения,
                адресованные знаменитостям, но не дошедшие до них по разным
                причинам. Они вернулись на наш склад и готовы покорить вас своей
                ценностью, созданной через сложные пути доставки. Получите
                искусство абсурда прямо сейчас по невероятным ценам!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-[40px] md:mt-[11.11vh] md:my-[11.11vh] md:mx-[18.75vw]">
        <ProductList products={products} />
      </div>

      <Footer />
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
