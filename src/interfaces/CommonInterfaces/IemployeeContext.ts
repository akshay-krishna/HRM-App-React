import { IallTypeDataListing } from "./Icommon";
import { IskillID } from "./IstringID";

export interface IemployeeContext {
  employeeData: IallTypeDataListing[];
  roleList: IallTypeDataListing[];
  deptList: IallTypeDataListing[];
  skillList: IskillID[];
  setSkillList: (value: React.SetStateAction<IskillID[]>) => void;
  sortConfig: { sortColumn: string; sortOrder: "asc" | "desc" };
  updateSortConfig: (sortColumn: string) => void;
  searchValue?: string;
  filters: IskillID[];
  setFilters: ([]: IskillID[]) => void;
  updateSearch: (currentSearch: string) => void;
  updateFilters: ([]: IskillID) => void;
  removeFilter: ([]: IskillID[]) => void;
  setDeleteChange: (cond: boolean) => void;
  setFormChange: (cond: boolean) => void;
  totalPages: string;
  pageNumber: string;
  setPageNumber: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFilter: IskillID[];
  setSelectedFilter: React.Dispatch<React.SetStateAction<IskillID[]>>;
}
