import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  containerClassName?: string;
}

export const Select: React.FC<SelectProps> = ({ label, options, className = '', containerClassName = '', ...props }) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {label && <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>}
      <select
        className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 disabled:bg-gray-50 ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};