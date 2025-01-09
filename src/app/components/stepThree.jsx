"use client";

import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Image from "next/image";

export function StepThree({ setSteps, onChange, form }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(file);
    if (!file) return;
    const fileEvent = {
      target: { value: file, id: "img" },
    };
    onChange(fileEvent);
    if (file && file.type.startsWith("image/")) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      console.log(previewUrl);
    }
  };

  const isFormValid = () => {
    return form.dateOfBirth && imagePreview;
  };
  console.log(imagePreview);
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
        <form className="w-[26rem] h-fit mt-[2rem] mx-auto ">
          <p className="text-[0.875rem] font-semibold ">Date of birth *</p>
          <input
            min="1900-01-01"
            max="2024-12-20"
            onChange={onChange}
            id="dateOfBirth"
            placeholder="dateOfBirth"
            className="w-[26rem] h-[2.75rem] border-[1px] rounded-[0.5rem] p-[0.75rem] mt-[0.2rem]"
            type="date"
          />
          <div className="text-[#E14942]">
            {!form.dateOfBirth && "Invalid date"}
          </div>

          <p className="text-[0.875rem] font-semibold mt-[1rem]">
            Profile image *
          </p>
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  {...getRootProps()}
                  className="w-[416px] h-[180px] bg-[#7F7F800D] flex justify-center items-center flex-col gap-[10px] rounded-md mt-[0.2rem]"
                >
                  <input onChange={onChange} {...getInputProps()} id="img" />
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-[28px] h-[28px] bg-white flex justify-center items-center rounded-full">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.5 1.5V8.5H1.5V1.5H8.5ZM8.5 0.5H1.5C0.95 0.5 0.5 0.95 0.5 1.5V8.5C0.5 9.05 0.95 9.5 1.5 9.5H8.5C9.05 9.5 9.5 9.05 9.5 8.5V1.5C9.5 0.95 9.05 0.5 8.5 0.5ZM6.07 4.93L4.57 6.865L3.5 5.57L2 7.5H8L6.07 4.93Z"
                            fill="#202124"
                          />
                        </svg>
                      </div>
                      <p>Add Image</p>
                    </div>
                  )}
                </div>
              </section>
            )}
          </Dropzone>
          <div className="text-[#E14942]">
            {!imagePreview && "Please upload a profile image"}
          </div>
        </form>
      </div>
      <div className="w-[26rem] h-[2.75rem] mt-[8rem] mx-auto flex justify-between gap-[5px]">
        <button
          onClick={() => {
            setSteps(2);
          }}
          className="w-[8rem] h-[2.75rem] bg-white border-[1px] border-[#CBD5E1] rounded-[6px] font-medium"
        >
          {"<"} back
        </button>
        <button
          disabled={!isFormValid()}
          onClick={() => {
            setSteps(4);
          }}
          className={`w-[17.5rem] h-[2.75rem] rounded-[6px] font-medium ${
            !isFormValid()
              ? "bg-[#D6D8DB] text-#8E8E8E"
              : "bg-[black] text-[white]"
          }`}
        >
          Submit 3/3
        </button>
      </div>
    </div>
  );
}
