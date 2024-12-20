"use client";
import { useState } from "react";
import { StepOne } from "./components/stepOne";
import { StepTwo } from "./components/stepTwo";
import { StepThree } from "./components/stepThree";
import { FinalPage } from "./components/final";

export default function Home() {
  const [steps, setSteps] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    img: "",
  });
  console.log(form);

  const onChange = (e) => {
    const field = e.target.id;
    const newValues = { ...form, [field]: e.target.value };
    setForm(newValues);
    console.log(e);
  };

  return (
    <div>
      {steps === 1 ? (
        <StepOne form={form} onChange={onChange} setSteps={setSteps} />
      ) : steps === 2 ? (
        <StepTwo form={form} onChange={onChange} setSteps={setSteps} />
      ) : steps === 3 ? (
        <StepThree form={form} onChange={onChange} setSteps={setSteps} />
      ) : (
        <FinalPage form={form} />
      )}
    </div>
  );
}
