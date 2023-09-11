import localFont from "next/font/local";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MontserratExtraBold = localFont({
  src: "../../public/fonts/Montserrat-ExtraBold.ttf",
});

export const Header = () => {
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY; // Определяем prevScrollPos внутри компонента

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setScrolling(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      prevScrollPos = currentScrollPos; // Обновляем prevScrollPos
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Убедитесь, что prevScrollPos исключен из зависимостей useEffect

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[101] bg-white transition-transform transform ${
        scrolling ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <header className={MontserratExtraBold.className}>
        <div className="mx-[24px] py-5 md:py-[1.85vh] md:w-[75vw] md:mx-auto flex justify-between items-center bg-white">
          <Link href='/' className=" text-2xl md:text-[5.37vh] md:leading-[9.72vh] ">
            ДРУСБА
          </Link>
          <h2 className="hidden md:visible md:text-[2.22vh]">EN -- RU</h2>
        </div>
      </header>
    </div>
  );
};

export default Header;
