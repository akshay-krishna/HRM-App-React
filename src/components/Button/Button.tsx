import React from "react";
import { ButtonWrapper } from "./ButtonStyled";
export const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};

export default Button;
