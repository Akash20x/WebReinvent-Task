import React, { ReactNode } from "react";
import { cn } from "../../utils/cn";
import Spinner from "./spinner";

type Props = {
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
  loadingText?: string;
  children: ReactNode;
  type?: "submit" | "button";
  title?: string;
};

const Button = ({
  className,
  isLoading = false,
  onClick,
  loadingText = "Please wait",
  children,
  type = "submit",
  title,
}: Props) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      title={title}
      onClick={onClick}
      className={cn(
        "flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
        className,
        `${isLoading && "bg-blue-600/60 hover:bg-blue-600/60"}`
      )}
    >
      {isLoading ? (
        <>
          <Spinner className="mr-2" />
          {loadingText}
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
