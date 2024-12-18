import Image from "next/image";

const FinalPage = () => {
  return (
    <div className="w-[30rem] h-[12rem] mx-auto mt-[3rem] bg-white rounded-[8px]">
      <div className="w-[26rem] h-[8rem] m-auto pt-[1.3rem]">
        <Image width={60} height={60} src={"/logo.png"} alt="Logo" />
        <p className="font-bold text-[1.625rem] text-[#202124]">
          You're All Set 🔥
        </p>
        <p className="text-[#8E8E8E] font-normal text-[1.125rem]">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
export { FinalPage };
