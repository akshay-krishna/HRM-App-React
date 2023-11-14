import { IstringID } from "./IstringID";

export interface IemployeeContext {
  sortConfig?: { sortColumn: string; sortOrder: string };
  updateSortConfig?: (newConfig:{sortColumn: string, sortOrder: string}) => void;
  searchValue?: string;
  filters: IstringID[];
  updateSearch?: (currentSearch: string) => void;
  updateFilters: ([]: IstringID) => void;
  removeFilter: ([]: IstringID[]) => void;
}
