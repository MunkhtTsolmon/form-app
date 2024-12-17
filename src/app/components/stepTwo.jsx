import Image from "next/image";
export function StepTwo({ setSteps }) {
  return (
    <div className="w-[30rem] h-[41rem] mx-auto mt-[20vh] bg-white rounded-[0.5rem] flex flex-col">
      <div>
        <div className="w-[26rem] h-[8rem] mx-auto pt-[1rem]">
          <Image width={60} height={60} src={"/logo.png"} alt="Logo" />
          <h1 className="text-[#202124] font-bold text-[26px]">Join Us! 😎</h1>
          <p className="text-[#8E8E8E] text-[16px] font-medium">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="w-[26rem] h-fit mt-[2rem] mx-auto ">
          <p className="text-[0.875rem] font-semibold ">Email *</p>
          <input
            placeholder="Email"
            className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
            type="email"
          ></input>
          <p className="text-[0.875rem] font-semibold mt-[0.5rem]">
            Phone number *
          </p>
          <input
            placeholder="Phone number"
            className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
          ></input>
          <p className="text-[0.875rem] font-semibold mt-[0.5rem]">
            Password *
          </p>
          <input
            placeholder="Password"
            className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
          ></input>
          <p className="text-[0.875rem] font-semibold mt-[0.5rem]">
            Confirm password *
          </p>
          <input
            placeholder="Confirm password"
            className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
          ></input>
        </div>
      </div>{" "}
      <button
        onClick={() => {
          setSteps(1);
        }}
        className=""
      >
        {">"} back
      </button>
      <button
        onClick={() => {
          setSteps(3);
        }}
      >
        Continue
      </button>
    </div>
  );
}
