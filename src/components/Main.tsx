import ClownsImg from "../../public/pics/clowns.png";
import CircleImg from "../../public/pics/circles.png";
import HemisphereImg from "../../public/pics/hemisphere.png";
import SmallStarImg from "../../public/pics/small stars.png";
import StarImg from "../../public/pics/star.svg";
import MobileClownsImg from "../../public/pics/mobile_clown.svg";

import Image from "next/image";
import localFont from "next/font/local";

const nextArtFont = localFont({
  src: "../../public/fonts/NEXT_ART_Bold.otf",
});
const MontserratBold = localFont({
  src: "../../public/fonts/Montserrat-Bold.ttf",
});

const Main = () => {
  return (
    <div className="relative md:w-[75vw] mx-auto pt-[2vh]">
      <Image
        src={HemisphereImg}
        alt={"HemisphereImg"}
        width={1500}
        height={1500}
        className="absolute md:w-[35.15vw] md:h-[75.27vh] md:-top-[0vh] md:left-[25vw] select-none z-0 md:z-[101]"
      ></Image>

      <Image
        src={CircleImg}
        alt={"CircleImg"}
        width={1500}
        height={1500}
        className="absolute md:w-[35.15vw] md:h-[75.27vh] -top-[24px] md:-top-[4vh] left-[10px] md:left-[27.69vw] rotate-90 select-none z-0 md:z-[101]"
      ></Image>

      <Image
        src={MobileClownsImg}
        alt={"MobileClownsImg"}
        width={1671}
        height={1601}
        className=" md:hidden w-[315px] h-[252px] left-8 top-[80px] absolute  select-none z-0 md:z-[101]"
      ></Image>

      <Image
        src={ClownsImg}
        alt={"ClownsImg"}
        width={1671}
        height={1601}
        className="hidden md:block absolute md:w-[34.94vw] md:h-[55.64vh] md:top-[2.31vh] md:left-[31vw] select-none z-0 md:z-[101]"
      ></Image>

      <Image
        src={SmallStarImg}
        alt={"SmallStarImg"}
        width={100}
        height={100}
        className="hidden md:block absolute md:w-[1.97vw] md:h-[3.7vh] md:top-[62.72vh] left-[55.86vw] select-none z-0 md:z-[101]"
      ></Image>

      <Image
        src={StarImg}
        alt={"StarImg"}
        width={3714}
        height={3676}
        className="hidden md:block absolute md:w-[89.27vw] md:h-[155.1vh] md:top-[49.81vh] md:left-[8.42vw] select-none"
      ></Image>

      <div className={nextArtFont.className}>
        <div className="pl-[56px] md:pl-0 pt-[362px] md:pt-[22.96vh] z-[99] absolute font-bold">
          <h1 className="text-[62px] md:text-[9.07vh] leading-[70px] md:leading-[10.27vh]">
            ДРУСБА
          </h1>
          <h2 className="text-base md:text-[2.40vh] leading-[18px] md:leading-[2.77vh] bg-[#F6CA46] w-full text-center">
            СЛУЖБА ДОСТАВКИ АБСУРДА
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
