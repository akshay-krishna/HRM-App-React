import { IstringID } from "./IstringID";

export interface IallTypeDataListing {
  id: string | number;
  [id: string]: string | JSX.Element | string[] | IstringID[] | any;
}

export interface IviewEmployee {
  id?: string;
  dept?: string;
  loc?: string;
  fName?: string;
  lName?: string;
  role?: string;
  doj?: string;
  dob?: string;
  phnNo?: string;
  emailId?: string;
  address?: string;
  skill?: IstringID[];
}
