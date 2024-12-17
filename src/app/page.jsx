"use client";
import { useState } from "react";
import { StepOne } from "./components/stepOne";
import { StepTwo } from "./components/stepTwo";
import { StepThree } from "./components/stepThree";

export default function Home() {
  const [steps, setSteps] = useState(1);
  return (
    <div>
      {steps === 1 ? (
        <StepOne setSteps={setSteps} />
      ) : steps === 2 ? (
        <StepTwo setSteps={setSteps} />
      ) : steps === 3 ? (
        <StepThree setSteps={setSteps} />
      ) : (
        "success"
      )}
    </div>
  );
}
