import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Alerts = ({ children, className, width = "w-full", ...rest }: IProps) => {
  console.log({ rest });
  return (
    <button
      className={`${className}  p-2 w-full rounded-md text-white ${width}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Alerts;
