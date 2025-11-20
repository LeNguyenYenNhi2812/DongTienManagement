import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', containerClassName = '', ...props }) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {label && <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>}
      <input
        className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 disabled:bg-gray-50 disabled:text-gray-500 ${className}`}
        {...props}
      />
    </div>
  );
};