import { IstringID } from "./IstringID";

export interface IemployeeContext {
  filters: IstringID[];
  updateFilters: ([]: IstringID) => void;
  removeFilter: ([]:IstringID[]) => void
}
