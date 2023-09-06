import localFont from "next/font/local";
import React, { useEffect, useState } from "react";

const MontserratExtraBold = localFont({
  src: "../../public/fonts/Montserrat-ExtraBold.ttf",
});

export const Header = () => {
  const [scrolling, setScrolling] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setScrolling(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[100] transition-transform transform ${
        scrolling ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className={MontserratExtraBold.className}>
        <div className="mx-[24px] py-5 md:py-[1.85vh] md:w-[75vw] md:mx-auto flex justify-between items-center bg-white md:bg-none">
          <h2 className=" text-2xl md:text-[5.37vh] md:leading-[9.72vh] ">
            ДРУСБА
          </h2>
          <h2 className="hidden md:visible md:text-[2.22vh]">EN -- RU</h2>
        </div>
      </header>
    </div>
  );
};
