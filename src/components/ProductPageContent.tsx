import { useEffect, useRef } from "react";

import localFont from "next/font/local";
import FeedbackForm from "./FeedbackForm";
import Image from "next/image";
import Link from "next/link";

import ClownIconImg from "../../public/pics/clown_icon.svg";
import UsernameIcon from "../../public/pics/username_icon.svg";

const MontserratRegular = localFont({
  src: "../../public/fonts/Montserrat-Regular.ttf",
});
const MontserratSemiBold = localFont({
  src: "../../public/fonts/Montserrat-SemiBold.ttf",
});
const MontserratBold = localFont({
  src: "../../public/fonts/Montserrat-Bold.ttf",
});
const MontserratExtraBold = localFont({
  src: "../../public/fonts/Montserrat-ExtraBold.ttf",
});
export default function ProductPageContent({ product }) {
  const price = product.variants.edges[0].node.priceV2.amount;
  const name = product.description.slice(
    product.description.indexOf("@") + 1,
    product.description.indexOf("@@")
  );
  const messageFull = product.description.slice(
    product.description.indexOf("@@") + 2,
    product.description.indexOf("@@@")
  );
  const messageTitle = messageFull.slice(0, messageFull.indexOf("#"));
  const messageText = messageFull.slice(messageFull.indexOf("#") + 1);
  const answer = product.description.slice(
    product.description.indexOf("@@@") + 3
  );

  const feedbackFormRef = useRef<HTMLDivElement | null>(null);
  function scrollToFeedbackForm() {
    if (feedbackFormRef.current) {
      feedbackFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="mt-20 md:mt-[14vh] mx-10 md:mx-[18.75vw]">
      <div className="md:flex md:pb-[7.03vh] pb-5">
        <Image
          src={product.images.edges[0].node.originalSrc}
          alt={"alt img text"}
          width={1000}
          height={1000}
          className="md:w-[26.25vw] md:h-[55.83vh] object-cover rounded-3xl md:mr-[3.85vw] mb-6 md:mb-0"
        />
        <div className="">
          <h2
            className={`text-3xl md:text-[3.88vh] md:leading-[5.74vh] pb-2 md:pb-[1.48vh] ${MontserratExtraBold.className}`}
          >
            {product.title}
          </h2>
          <p
            className={`text-lg md:text-[2.96vh] md:leading-[3.7vh] pb-2 md:pb-[0.74vh] ${MontserratRegular.className}`}
          >
            {product.description.slice(0, product.description.indexOf("@"))}
          </p>
          <p
            className={`md:text-[4.44vh] text-5xl text-[#3C3C43] pb-3 md:pb-[4.25vh] ${MontserratSemiBold.className}`}
          >{`${Math.round(price)} ₽`}</p>

          <button
            className={`w-full md:w-[22.08vw] md:text-[3.88vh] md:leading-[5.74vh] bg-[#FE6A3A] text-white px-[24px] md:px-[1.45vw] py-[18px] md:py-[1.85vh] mb-2 md:mb-[2.03vh] rounded-2xl ${MontserratSemiBold.className}`}
            onClick={() => {
              if (feedbackFormRef.current) {
                feedbackFormRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {`Оставить заявку`}
          </button>

          <Link
            href={`#`}
            className={`text-base md:text-[2.59vh] underline ${MontserratSemiBold.className}`}
          >
            <p>{`Политика возврата абсурда`}</p>
          </Link>
        </div>
      </div>
      <p
        className={`${MontserratRegular.className} hidden md:inline-block md:mb-[2.4vh] md:ml-[2.18vw] text-[##3C3C43] md:text-[2.96vh] md:leading-[3.7vh] border-b-[2px] `}
      >{`История заказа`}</p>
      <div className="bg-[#F6CA46] hidden md:flex md:w-[51.09vw] rounded-md md:mb-[5.37vh]">
        <Image
          src={ClownIconImg}
          alt={`ClownIconImg`}
          width={1000}
          height={1000}
          className="rounded-full md:h-[7.4vh] md:w-[4.16vw] md:mx-[1.04vw] md:mt-[1.85vh]"
        />
        <div className="md:mt-[1.29vh]">
          <p
            className={`${MontserratSemiBold.className} md:leading-[2.77vh] md:text-[2.22vh] text-[#232229] md:pb-[0.18vh]`}
          >{`DRUSBA DELIVERY`}</p>
          <p
            className={`${MontserratRegular.className} text-[#3C3C43] md:text-[1.85vh] md:leading-[2.22vh] md:pb-[0.74vh]`}
          >
            {product.title}
          </p>
          <div className="h-[1px] md:h-[0.09vh] w-[146px] md:w-[21.61vw] bg-black md:mb-[1.85vh]"></div>
          <div
            className={`${MontserratRegular.className} md:text-[2.22vh] md:leading-[2.59vh] md:pb-[3.14vh] md:mr-[2.6vw]`}
          >
            <p>{messageTitle}</p>
            <p>
              <br />
              {messageText}
            </p>
            <p>
              <br />
              {`C уважением, DRUSBA DELIVERY`}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F6CA46] block md:hidden rounded-md mb-5">
        <div className="flex ">
          <Image
            src={ClownIconImg}
            alt={`ClownIconImg`}
            width={1000}
            height={1000}
            className="rounded-full w-[79px] h-[79px] mx-5 my-5"
          />
          <div className="mt-[30px]">
            <p
              className={`${MontserratSemiBold.className} text-[14px] leading-[17px] text-[#232229] pb-1`}
            >{`DRUSBA DELIVERY`}</p>
            <p
              className={`${MontserratRegular.className} text-[#3C3C43] text-[12px] leading-[14px] pb-3`}
            >
              {product.title}
            </p>
            <div className="h-[1px] md:h-[0.09vh] w-[146px] md:w-[21.61vw] bg-black md:mb-[1.85vh]"></div>
          </div>
        </div>

        <div className="mx-5 pb-5">
          <div className={`${MontserratRegular.className}`}>
            <p>{messageTitle}</p>
            <p>
              <br />
              {messageText}
            </p>
            <p>
              <br />
              {`C уважением, DRUSBA DELIVERY`}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFE2D9] md:ml-[7.18vw] hidden md:flex md:w-[51.09vw] rounded-md">
        <Image
          src={UsernameIcon}
          alt={`UsernameIcon`}
          width={1000}
          height={1000}
          className="rounded-full md:h-[11.57vh] md:w-[6.51vw] md:ml-[-0.10vw]"
        />
        <div className="md:mt-[1.29vh]">
          <p
            className={`${MontserratSemiBold.className} md:leading-[2.77vh] md:text-[2.22vh] text-[#232229] md:pb-[0.18vh]`}
          >
            {name}
          </p>
          <p
            className={`${MontserratRegular.className} text-[#3C3C43] md:text-[1.85vh] md:leading-[2.22vh] md:pb-[0.74vh]`}
          >{`RE: ${product.title}`}</p>
          <div className="h-[1px] md:h-[0.09vh] w-[146px] md:w-[21.61vw] bg-black md:mb-[1.85vh]"></div>
          <div
            className={`${MontserratRegular.className} md:text-[2.22vh] md:leading-[2.59vh] md:pb-[3.14vh] md:mr-[2.6vw]`}
          >
            <p>{answer.split("#")[0]}</p>
            <p>
              <br />
              {answer.split("#")[1]}
            </p>
            <p>
              <br /> {answer.split("#")[2]}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFE2D9] block md:hidden rounded-md">
        <div className="flex">
          <Image
            src={UsernameIcon}
            alt={`UsernameIcon`}
            width={1000}
            height={1000}
            className="rounded-full h-[99px] w-[99px]"
          />
          <div className="mt-[30px]">
            <p
              className={`${MontserratSemiBold.className} text-[14px] leading-[17px] text-[#232229] pb-1`}
            >
              {name}
            </p>
            <p
              className={`${MontserratRegular.className} text-[#3C3C43] text-[12px] leading-[14px] pb-3`}
            >{`RE: ${product.title}`}</p>
            <div className="h-[1px] w-[146px] bg-black"></div>
          </div>
        </div>

        <div className={`${MontserratRegular.className} mx-5 pb-5`}>
          <p>{answer.split("#")[0]}</p>
          <p>
            <br />
            {answer.split("#")[1]}
          </p>
          <p>
            <br /> {answer.split("#")[2]}
          </p>
        </div>
      </div>

      <div
        ref={feedbackFormRef}
        className="mt-[40px] md:mt-[11.11vh] md:my-[11.11vh]"
      >
        <FeedbackForm />
      </div>
    </div>
  );
}
