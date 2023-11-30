import { Dispatch } from "react";
import { IallTypeDataListing } from "./Icommon";
import { IskillID } from "./IstringID";

export interface IemployeeContext {
  employeeData: IallTypeDataListing[];
  roleList: IallTypeDataListing[];
  deptList: IallTypeDataListing[];
  skillList: IskillID[];
  sortConfig: { sortColumn: string; sortOrder: string };
  searchValue?: string;
  filters: IskillID[];
  deleteChange: boolean;
  formChange: boolean;
  totalPages: string;
  pageNumber: string;
  loading: boolean;
  selectedFilter: IskillID[];
}

export interface IemployeeAction {
  type: string;
  payload?: any;
}

export interface IreducerContext {
  state: IemployeeContext;
  dispatch: Dispatch<any>;
}
