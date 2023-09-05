import localFont from "next/font/local";
import React from "react";

const MontserratExtraBold = localFont({
  src: "../../public/fonts/Montserrat-ExtraBold.ttf",
});

export const Header = () => {
  return (
    <header className={MontserratExtraBold.className}>
      <div className="w-[1440px] mx-auto py-[20px] flex justify-between items-center">
        <h2 className="font-extrabold text-[58px] leading-[105px] ">ДРУСБА</h2>
        <h2>EN -- RU</h2>
      </div>
    </header>
  );
};
