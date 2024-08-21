import React from "react";
import { CgSpinner } from "react-icons/cg";
import { cn } from "../../utils/cn";

type Props = {
  className?: string;
};

const Spinner = ({ className }: Props) => {
  return <CgSpinner className={cn("w-6 h-6 animate-spin", className)} />;
};

export default Spinner;
