import { IallTypeDataListing } from "./Icommon";
import { IskillID } from "./IstringID";

export interface IemployeeContext {
  employeeData: IallTypeDataListing[];
  roleList: IallTypeDataListing[];
  deptList: IallTypeDataListing[];
  skillList: IskillID[];
  setSkillList: (value: React.SetStateAction<IskillID[]>) => void;
  sortConfig: { sortColumn: string; sortOrder: string };
  updateSortConfig: (sortColumn: string) => void;
  searchValue?: string;
  filters: IskillID[];
  updateSearch: (currentSearch: string) => void;
  updateFilters: ([]: IskillID) => void;
  removeFilter: ([]: IskillID[]) => void;
}
