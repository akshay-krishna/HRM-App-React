import { IbuttonAttributes } from "../../interfaces/IbutonInterface";
import { ButtonWrapper } from "./ButtonStyled";

const Button = ({
  btnType,
  type_name = "button",
  description,
  src,
  alt,
}: IbuttonAttributes) => {
  return (
    <ButtonWrapper className={btnType ? btnType : ""} type={type_name}>
      {description && <span>{description}</span>}
      {src && <img src={src} alt={alt} />}
    </ButtonWrapper>
  );
};

export default Button;
