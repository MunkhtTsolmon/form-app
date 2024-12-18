"use client";
import { useState } from "react";
import { StepOne } from "./components/stepOne";
import { StepTwo } from "./components/stepTwo";
import { StepThree } from "./components/stepThree";
import { FinalPage } from "./components/final";
import { useFormik } from "formik";
import { schema } from "@/app/Schemas/schema";

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
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      img: "",
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const onChange = (e) => {
    const field = e.target.id;
    const newValues = { ...form, [field]: e.target.value };
    setForm(newValues);
  };

  return (
    <div>
      {steps === 1 ? (
        <StepOne onChange={onChange} setSteps={setSteps} />
      ) : steps === 2 ? (
        <StepTwo onChange={onChange} setSteps={setSteps} />
      ) : steps === 3 ? (
        <StepThree onChange={onChange} setSteps={setSteps} />
      ) : (
        <FinalPage />
      )}
    </div>
  );
}
