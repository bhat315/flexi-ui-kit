import React from "react";

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
}) => {
  const baseStyles = "rounded-md w-full transition focus:outline-none";
  const variants: Record<string, string> = {
    filled: "bg-gray-100 border border-gray-200 focus:border-blue-500",
    outlined: "border border-gray-300 focus:border-blue-500",
    ghost: "bg-transparent border-b border-gray-300 focus:border-blue-500",
  };
  const sizes: Record<string, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2",
    lg: "px-4 py-3 text-lg",
  };

  return (
    <div className="flex flex-col gap-1 w-full max-w-md">
      {label && <label className="font-medium text-gray-700">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
          invalid ? "border-red-500" : ""
        }`}
      />
      {helperText && !invalid && (
        <span className="text-xs text-gray-500">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
