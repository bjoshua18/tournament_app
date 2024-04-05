import React, { InputHTMLAttributes } from "react";

export default function TeamFormInput(
  { ...props }: InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      className="my-4 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-base"
      {...props}
    />
  );
}