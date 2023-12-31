import localFont from "next/font/local";
import Image from "next/image";
import ClownFormImg from "../../public/pics/form_conus.svg";
import { RefObject, useRef, useState } from "react";
import Modal from "./Modal";

const MontserratBold = localFont({
  src: "../../public/fonts/Montserrat-Bold.ttf",
});

const MontserratRegular = localFont({
  src: "../../public/fonts/Montserrat-Regular.ttf",
});

const FeedbackForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTextarea, setTextareaValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef: any = useRef(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const emailRegex = /^\S+@\S+\.\S+$/;

    const name = nameRef.current?.value?.trim() || "";
    const email = emailRef.current?.value?.trim() || "";
    const message = messageRef.current?.value?.trim() || "";

    e.preventDefault();

    if (emailRegex.test(email)) {
      let data = { email, name, message };
      await fetch("api/nodemailer", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        //   .then((res) => {
        //     if (res.status === 200) {
        //       console.log("status 200");
        //       //;
        //     }
        //   });
        // } else {
        //   console.log("invalid email");
        .then((res) => {
          if (res.status === 200) {
            setModalContent("Сообщение успешно отправлено!");
            setModalVisible(true);
            // Очистите поля формы или установите другие значения по вашему усмотрению
          } else {
            setModalContent("Произошла ошибка при отправке сообщения.");
            setModalVisible(true);
          }
        });
      //
    }
  };

  return (
    <div className="md:grid md:grid-cols-2 my-8 md:my-[11.11vh] ">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className="border border-[#FE6A3A] rounded-2xl "
      >
        <div className="flex items-center justify-center">
          <h2
            className={`${MontserratBold.className}  text-2xl md:text-[2.22vh] justify-center mx:auto my-10 md:my-[3.7vh] text-center md:pt-[7.77vh] md:pb-[6.66vh]`}
          >
            Отправьте нам сообщение
          </h2>
        </div>
        <div className="mx-10 md:mx-[5vw] mb-10 md:mb-[4.44vh] flex items-center border-b">
          <label className={`${MontserratBold.className} md:text-[2.22vh] `}>
            Имя
          </label>
          <input
            ref={nameRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            id="name"
            placeholder=""
            className={`${MontserratRegular.className} md:text-[2.22vh] rounded-2xl px-2 md:px-[0.4vw] focus:outline-none focus:border-[#FE6A3A] w-full`}
          />
        </div>
        <div className="mx-10 md:mx-[5vw] my-10 md:my-0 md:mb-[4.44vh] flex items-center border-b">
          <label className={`${MontserratBold.className} md:text-[2.22vh]`}>
            Почта
          </label>
          <input
            ref={emailRef}
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            type="text"
            id="email"
            required
            placeholder=""
            className={`${MontserratRegular.className} md:text-[2.22vh] rounded-2xl px-2 md:px-[0.4vw]  focus:outline-none focus:border-[#FE6A3A] w-full`}
          />
        </div>
        <div className="mx-10 md:mx-[3.33vw] md:pb-[1.11vh] my-10 md:my-0 md:mb-[4.44vh] border rounded-2xl">
          <input
            ref={messageRef}
            value={inputTextarea}
            onChange={(e) => setTextareaValue(e.target.value)}
            id="message"
            placeholder="Вот и ваше сообщение..."
            className={`${MontserratRegular.className}  my-4 md:my-[2.03vh] px-4 md:px-[1.16vw] md:text-[2.22vh] rounded-2xl focus:outline-none w-full `}
          />
        </div>
        <div className="mx-10 md:mx-[3.33vw] my-10 md:my-0 md:mb-[7.77vh]">
          <button
            type="submit"
            className={`${MontserratBold.className} text-[22px] md:text-[2.22vh] py-3 md:py-[2.03vh] bg-[#FE6A3A] rounded-2xl w-full text-white active:scale-[98%] active:delay-50 transition-all `}
          >
            Отправить
          </button>
        </div>
      </form>

      <div className="ml-[2.62vw] items-center md:flex justify-start relative">
        <Image
          src={ClownFormImg}
          alt="text"
          width={1000}
          height={1000}
          className="md:w-[31.04vw] md:h-[43.33vh] hidden md:flex"
        />
        <div className="absolute -rotate-12 -top-[220px] md:top-[0vh] -right-[150px] md:-right-[16.66vw]">
          <Modal
            modalVisible={modalVisible}
            modalContent={modalContent}
            setModalVisible={setModalVisible}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
