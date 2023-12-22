import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Alerts = ({ children, className, ...rest }: IProps) => {
  console.log({ rest });
  return (
    <button
      className={`${className} p-2 w-full rounded-md text-white`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Alerts;
