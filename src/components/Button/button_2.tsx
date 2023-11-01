import React from "react";
const B2 = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return <button {...props}>{props.children}</button>;
};

export default B2;
