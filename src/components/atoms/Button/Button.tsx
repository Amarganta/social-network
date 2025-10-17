// src/components/atoms/Button/Button.tsx
"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const baseStyles =
    "w-full py-2 px-4 rounded-md font-medium transition text-center";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};
