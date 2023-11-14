export interface IbuttonAttributes {
  btnType: string;
  type_name: "submit" | "reset" | "button" | undefined;
  description: string;
  src?: string;
  alt?: string;
}
