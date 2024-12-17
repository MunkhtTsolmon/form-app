import Image from "next/image";

const FormBody = () => {
  return (
    <div>
      <div className="w-[26rem] h-[8rem] mx-auto pt-[1rem]">
        <Image width={60} height={60} src={"/logo.png"} alt="Logo" />
        <h1 className="text-[#202124] font-bold text-[26px]">Join Us! 😎</h1>
        <p className="text-[#8E8E8E] text-[16px] font-medium">
          Please provide all current information accurately.
        </p>
      </div>
      <div className="w-[26rem] h-fit mt-[2rem] mx-auto ">
        <p className="text-[0.875rem] font-semibold ">First name *</p>
        <input
          placeholder="First name"
          className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
          type="name"
        ></input>
        <p className="text-[0.875rem] font-semibold mt-[0.5rem]">Last name *</p>
        <input
          placeholder="Last name"
          className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
        ></input>
        <p className="text-[0.875rem] font-semibold mt-[0.5rem]">Username *</p>
        <input
          placeholder="Username"
          className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
        ></input>
      </div>
    </div>
  );
};
export { FormBody };
