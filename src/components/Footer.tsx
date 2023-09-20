import localFont from "next/font/local";
import footerGlobeImg from "../../public/pics/footer_globe.svg";
import telegramIconImg from "../../public/pics/telegram_icon.svg";
import instaIconImg from "../../public/pics/insta_icon.svg";
import Image from "next/image";
import Link from "next/link";

const MontserratRegular = localFont({
  src: "../../public/fonts/Montserrat-Regular.ttf",
});

const Footer = () => {
  return (
    <footer className="h-full md:h-[34.72vh] bg-[#3C3C43] relative z-100 ">
      <div className="md:mx-[18.75vw] md:gap-[1.45vw] grid grid-cols-3 md:text-[1.38vh] text-[#FFFFFF]">
        <div className="md:mx-[6.25vw] hidden md:block">
          <Image
            src={footerGlobeImg}
            alt={"yext"}
            width={1000}
            height={1000}
            className="md:w-[5.88vw] md:h-[21.38vh] my-[6.66vh]"
          />
        </div>
        <div className="hidden md:block">
          <h1 className={MontserratRegular.className}>
            <p className="md:mt-[8vh]">DRUSBA DELIVERY</p>
            <p className="md:mt-[1.48vh]">
              Миссия: Создание искусства через сложные
              <br />
              пути доставки
            </p>
            <p className="md:mt-[1.48vh]">
              Специализируемся на доставке
              <br />
              современного искусства между Россией
              <br />и странами запада. Мы верим, что искусство
              <br />
              должно проходить через слои испытаний,
              <br />
              чтобы обрести истинную ценность.
            </p>
          </h1>{" "}
        </div>

        <div className="my-4 md:my-0 px-4 md:px-0">
          <p className="md:mt-[8vh] hidden md:block">drusbastore@gmail.com</p>

          <p className="md:mt-[1.48vh] hidden md:block">
            <a href="tel:+1234567890" className="md:mt-[1.48vh]">
              +7 977 411 1938
            </a>
          </p>

          <div className="md:mt-[3.33vh] flex gap-2 md:gap-0">
            <Link href="https://www.telegram.org/" target="_blank">
              <Image
                src={telegramIconImg}
                alt={"telegram"}
                width={1000}
                height={1000}
                className="md:w-[2.18vw] md:h-[3.88vh]"
              />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <Image
                src={instaIconImg}
                alt={"insta"}
                width={1000}
                height={1000}
                className="md:w-[2.18vw] md:h-[3.88vh]"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
