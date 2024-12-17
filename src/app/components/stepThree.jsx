"use client";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

export function StepThree({ setSteps }) {
  // State to store the uploaded files
  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null); // State for image preview URL

  // Function to handle file drop
  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles); // Store the accepted files in the state

    // If the file is an image, create a preview URL
    const file = acceptedFiles[0]; // Assuming single file upload for preview
    if (file && file.type.startsWith("image/")) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl); // Update the image preview state
    }
  };

  return (
    <div className="w-[30rem] h-[41rem] mx-auto mt-[20vh] bg-white rounded-[0.5rem] flex flex-col">
      {/* Your existing form structure */}
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="w-[416px] h-[180px] bg-[#7F7F800D] flex justify-center items-center flex-col gap-[10px] rounded-md ">
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
            </div>
          </section>
        )}
      </Dropzone>

      {/* Display the uploaded file(s) */}
      <div>
        {imagePreview && (
          <div className="mt-4">
            <p>Preview:</p>
            <img
              src={imagePreview}
              alt="Preview"
              className="w-[200px] h-[200px] object-cover rounded-md"
            />
          </div>
        )}
      </div>

      <button
        onClick={() => {
          setSteps(4);
        }}
      >
        Continue
      </button>
      <button
        onClick={() => {
          setSteps(2);
        }}
      >
        Back
      </button>
    </div>
  );
}
