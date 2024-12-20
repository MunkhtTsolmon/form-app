import Image from "next/image";

export function StepOne({ setSteps, onChange, form }) {
  const regex = /[1234567890-=_+{}:;"'<,>.!@#%&()]/;

  const validationForm = (field, message) => {
    if (!form[field] || regex.test(form[field])) {
      return message;
    }
  };

  const isFormValid = () => {
    const fields = ["firstName", "lastName", "userName"];
    return fields.every((field) => form[field] && !regex.test(form[field]));
  };

  return (
    <div className="w-[30rem] h-[41rem] mx-auto mt-[20vh] bg-white rounded-[0.5rem] flex flex-col">
      <div className="max-h-[380px]">
        <div className="w-[26rem] h-[8rem] mx-auto pt-[1rem]">
          <Image width={60} height={60} src={"/logo.png"} alt="Logo" />
          <h1 className="text-[#202124] font-bold text-[26px]">Join Us! 😎</h1>
          <p className="text-[#8E8E8E] text-[16px] font-medium">
            Please provide all current information accurately.
          </p>
        </div>
        <form className="w-[26rem] h-fit mt-[2rem] mx-auto">
          <p className="text-[0.875rem] font-semibold">First name *</p>
          <input
            id="firstName"
            onChange={onChange}
            placeholder="First name"
            className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
            type="text"
          />
          <div className="text-[#E14942]">
            {validationForm("firstName", "Please, enter a valid name")}
          </div>

          <p className="text-[0.875rem] font-semibold mt-[0.5rem]">Last name *</p>
          <input
            id="lastName"
            onChange={onChange}
            placeholder="Last name"
            className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
            type="text"
          />
          <div className="text-[#E14942]">
            {validationForm("lastName", "Please, enter a valid name")}
          </div>

          <p className="text-[0.875rem] font-semibold mt-[0.5rem]">Username *</p>
          <input
            id="userName"
            onChange={onChange}
            placeholder="Username"
            className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
            type="text"
          />
          <div className="text-[#E14942]">
            {validationForm("userName", "Please, enter a valid name")}
          </div>
        </form>
      </div>
      <button
        disabled={!isFormValid()}
        onClick={() => {
          setSteps(2);
        }}
        className={`rounded-[6px] w-[26rem] h-[2.75rem] mt-[12rem] mx-auto ${
          isFormValid() ? "bg-[black] text-white" : "bg-[#D6D8DB]"
        }`}
      >
        Continue
      </button>
    </div>
  );
}

