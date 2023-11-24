import { ReactNode } from "react";

type ButtonProps = {
  page: number;
  onClick: () => void;
  children?: ReactNode;
};

export default ButtonProps;
