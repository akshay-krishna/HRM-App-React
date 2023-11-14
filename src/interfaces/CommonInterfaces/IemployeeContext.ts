import { IstringID } from "./IstringID";

export interface IemployeeContext {
  search?: string;
  filters: IstringID[];
  updateFilters: ([]: IstringID) => void;
  removeFilter: ([]: IstringID[]) => void;
}
