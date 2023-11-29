import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  page?: number;
  nextPage?: boolean;
};

export default ButtonProps;
