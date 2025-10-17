// src/components/atoms/Input/Input.tsx
"use client";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="flex flex-col gap-1 w-full">
    {label && (
      <label className="text-sm text-gray-700 font-medium">{label}</label>
    )}
    <input
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black transition"
      {...props}
    />
  </div>
);
