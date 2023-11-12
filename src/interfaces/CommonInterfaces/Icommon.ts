export interface IallTypeDataListing {
  [id: string]: string | JSX.Element | string[] | any;
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
  skill?: string[];
}
