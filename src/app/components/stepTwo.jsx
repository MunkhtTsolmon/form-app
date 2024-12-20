import Image from "next/image";

export function StepTwo({ setSteps, onChange, form }) {
  const regex = /[1234567890-=_+{}:;"'<,>.!@#%&()]/;

  
  const validationForm = (field, message) => {
    if (!form[field] || regex.test(form[field])) {
      return message;
    }
  }

  const isFormValid = () => {
    const fields = ["email", "phoneNumber", "password", "confirmPassword"];
    const areFieldsValid = fields.every(
      (field) => form[field] && !regex.test(form[field])
    );
    const isPasswordMatching =
      form.password && form.confirmPassword && form.password === form.confirmPassword;
    return areFieldsValid && isPasswordMatching;
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
        <form className="w-[26rem] h-fit mt-[2rem] mx-auto ">
          <p className="text-[0.875rem] font-semibold ">Email *</p>
          <input
            id="email"
            onChange={onChange}
            placeholder="Email"
            className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
            type="email"
          />
          <div className="text-[#E14942]">
            {validationForm("email", "Please enter a valid email")}
          </div>

          <p className="text-[0.875rem] font-semibold mt-[0.5rem]">
            Phone number *
          </p>
          <input
            id="phoneNumber"
            onChange={onChange}
            placeholder="Phone number"
            className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
          />
          <div className="text-[#E14942]">
            {validationForm("phoneNumber", "Please enter a valid phone number")}
          </div>

          <p className="text-[0.875rem] font-semibold mt-[0.5rem]">Password *</p>
          <input
            id="password"
            onChange={onChange}
            placeholder="Password"
            className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
            type="password"
          />
          <div className="text-[#E14942]">
            {validationForm("password", "Password must be valid")}
          </div>

          <p className="text-[0.875rem] font-semibold mt-[0.5rem]">
            Confirm password *
          </p>
          <input
            id="confirmPassword"
            onChange={onChange}
            placeholder="Confirm password"
            className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
            type="password"
          />
          <div className="text-[#E14942]">
            {form.password !== form.confirmPassword &&
              "Passwords do not match"}
          </div>
        </form>
      </div>
      <div className="w-[26rem] h-[2.75rem] mt-[12rem] mx-auto flex justify-between gap-[5px]">
        <button
          onClick={() => {
            setSteps(1);
          }}
          className="w-[8rem] h-[2.75rem] bg-white border-[1px] border-[#CBD5E1] rounded-[6px] font-medium"
        >
          {"<"} back
        </button>
        <button
          disabled={!isFormValid()}
          onClick={() => {
            setSteps(3);
          }}
          className={`w-[17.5rem] h-[2.75rem] rounded-[6px] font-medium ${
            isFormValid()
              ? "bg-[black] text-white"
              : "bg-[#D6D8DB] text-[#8E8E8E]"
          }`}
        >
          Continue 2/3
        </button>
      </div>
    </div>
  );
}

