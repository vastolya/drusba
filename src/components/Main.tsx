import React from "react";
import ClownsImg from "../../public/pics/clowns.png";
import CircleImg from "../../public/pics/circles.png";
import HemisphereImg from "../../public/pics/hemisphere.png";
import SmallStarImg from "../../public/pics/small stars.png";
import StarImg from "../../public/pics/star.png";
import Image from "next/image";
import localFont from "next/font/local";

const nextArtFont = localFont({
  src: "../../public/fonts/NEXT_ART_Bold.otf",
});

const Main = () => {
  return (
    <div className="relative max-w-[1440px] mx-auto">
      <Image
        src={HemisphereImg}
        alt={"HemisphereImg"}
        width={675}
        height={813}
        className="absolute top-[45px] left-[663px] scale-125 select-none"
      ></Image>

      <Image
        src={CircleImg}
        alt={"CircleImg"}
        width={675}
        height={813}
        className="absolute top-[9px] left-[743px] rotate-90 scale-125 select-none"
      ></Image>

      <Image
        src={ClownsImg}
        alt={"ClownsImg"}
        width={671}
        height={601}
        className="absolute top-[25px] left-[813px] select-none"
      ></Image>

      <Image
        src={SmallStarImg}
        alt={"SmallStarImg"}
        width={38}
        height={40}
        className="absolute top-[645px] left-[1303px] select-none"
      ></Image>

      <Image
        src={StarImg}
        alt={"StarImg"}
        width={1714}
        height={1676}
        className="absolute top-[808px] left-[941px] scale-150 select-none"
      ></Image>

      <div className={nextArtFont.className}>
        <div className="pt-[246px] pl-[8px] z-[100] absolute font-bold">
          <h1 className="text-[98px] leading-[111px]">ДРУСБА</h1>
          <h2 className="text-[26px] leading-[30px] bg-[#F6CA46] w-full text-center">
            СЛУЖБА ДОСТАВКИ АБСУРДА
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
