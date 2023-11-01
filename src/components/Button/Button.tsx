import { buttonAttributes } from "../../interfaces/butonInterface";

const Button = ({
  btnType,
  type_name = "button",
  description,
  src,
  alt,
}: buttonAttributes) => {
  return (
    <button className={btnType ? btnType : ""} type={type_name}>
      {description && <span>{description}</span>}
      {src && <img src={src} alt={alt} />}
    </button>
  );
};

export default Button;
