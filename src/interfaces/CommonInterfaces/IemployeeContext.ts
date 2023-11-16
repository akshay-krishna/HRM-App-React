import { IallTypeDataListing } from "./Icommon";
import { IstringID } from "./IstringID";

export interface IemployeeContext {
  employeeData: IallTypeDataListing[];
  sortConfig: { sortColumn: string; sortOrder: string };
  updateSortConfig: (sortColumn: string) => void;
  searchValue?: string;
  filters: IstringID[];
  updateSearch: (currentSearch: string) => void;
  updateFilters: ([]: IstringID) => void;
  removeFilter: ([]: IstringID[]) => void;
}
