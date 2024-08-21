import React from "react";
import { cn } from "../../utils/cn";

type Props = {
  placeholder?: string;
  className?: string;
  label?: string;
  labelClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  required?: boolean;
  type?: "button" | "text" | "password" | "email";
  name?: string;
};

const Input = ({
  placeholder,
  className,
  label,
  labelClassName,
  required = false,
  onChange,
  value,
  type = "text",
  name,
}: Props) => {
  return (
    <React.Fragment>
      {label && (
        <label
          htmlFor={name ?? label.replace(" ", "_")}
          className={cn(
            "block mb-2 text-sm font-medium text-gray-900",
            labelClassName
          )}
        >
          {label} {required && <span className="text-red-600 ms-1">*</span>}
        </label>
      )}
      <input
        type={type}
        required={required}
        value={value}
        id={name ?? label?.replace(" ", "_")}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 ",
          className
        )}
      />
    </React.Fragment>
  );
};

export default Input;
