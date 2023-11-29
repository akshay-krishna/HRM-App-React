import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IemployeeContext } from "../interfaces/CommonInterfaces/IemployeeContext";
import { IskillID } from "../interfaces/CommonInterfaces/IstringID";
import { getData } from "../core/api";
import { rowsPerPage } from "../utils/constant";

const initialContextValues: IemployeeContext = {
  employeeData: [],
  roleList: [],
  deptList: [],
  skillList: [],
  setSkillList: () => {},
  sortConfig: { sortColumn: "id", sortOrder: "asc" },
  updateSortConfig: () => {},
  searchValue: "",
  updateSearch: () => {},
  filters: [],
  setFilters: () => {},
  updateFilters: () => {},
  removeFilter: () => {},
  setDeleteChange: () => {},
  setFormChange: () => {},
  totalPages: "1",
  pageNumber: "1",
  setPageNumber: () => {},
  loading: true,
  setLoading: () => {},
  selectedFilter: [],
  setSelectedFilter: () => {},
};

const EmployeeContext = createContext(initialContextValues);

const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [employeeData, setEmployeeData] = useState(
    initialContextValues.employeeData
  );
  const [roleList, setRoleList] = useState(initialContextValues.roleList); //the list of roles fetched from api
  const [deptList, setDeptList] = useState(initialContextValues.deptList); //the list of departments fetched from api
  const [skillList, setSkillList] = useState(initialContextValues.skillList); //the list of skills fetched from api
  const [sortConfig, setSortConfig] = useState(initialContextValues.sortConfig); //config of sorting
  const [searchValue, setSearchValue] = useState(
    initialContextValues.searchValue
  );
  const [filters, setFilters] = useState<IskillID[]>(
    initialContextValues.filters
  );
  const [deleteChange, setDeleteChange] = useState(false);
  const [formChange, setFormChange] = useState(false);
  const [totalPages, setTotalPages] = useState(initialContextValues.totalPages);
  const [pageNumber, setPageNumber] = useState(initialContextValues.pageNumber);
  const [loading, setLoading] = useState(initialContextValues.loading);
  const [selectedFilter, setSelectedFilter] = useState(
    initialContextValues.selectedFilter
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getData(
          `/employee?limit=${rowsPerPage}&offset=${
            (Number(pageNumber) - 1) * rowsPerPage
          }&sortBy=${sortConfig.sortColumn}&sortDir=${sortConfig.sortOrder}`
        );
        const result = response.data.data.employees;
        setEmployeeData(result);
        setTotalPages(
          String(Math.ceil(response.data.data.count / rowsPerPage))
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    const fetchRole = async () => {
      try {
        const response = await getData("/roles");
        const result = response.data;
        setRoleList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRole();

    const fetchDept = async () => {
      try {
        const response = await getData("/departments");
        const result = response.data;
        setDeptList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDept();

    const fetchSkills = async () => {
      try {
        const response = await getData("/skills");
        const result = response.data.data;
        setSkillList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSkills();
  }, [
    sortConfig.sortColumn,
    sortConfig.sortOrder,
    deleteChange,
    formChange,
    pageNumber,
  ]);

  const updateSortConfig = (sortColumn: string) => {
    setSortConfig((prevConfig) => ({
      sortColumn,
      sortOrder:
        prevConfig.sortColumn === sortColumn
          ? prevConfig.sortOrder === "desc"
            ? "asc"
            : "desc"
          : "asc",
    }));
  };

  const updateSearch = (currentSearch: string) => {
    setSearchValue(currentSearch);
  };

  const updateFilters = (filter: IskillID) => {
    setFilters((prev) => [...prev, filter] as IskillID[]);
  };

  const removeFilter = (updatedFilter: IskillID[]) => {
    setFilters(updatedFilter);
  };

  const value: IemployeeContext = {
    employeeData,
    roleList,
    deptList,
    skillList,
    setSkillList,
    sortConfig,
    updateSortConfig,
    searchValue,
    updateSearch,
    filters,
    setFilters,
    updateFilters,
    removeFilter,
    setDeleteChange,
    setFormChange,
    totalPages,
    pageNumber,
    setPageNumber,
    loading,
    setLoading,
    selectedFilter,
    setSelectedFilter,
  };
  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => {
  return useContext(EmployeeContext);
};

export default EmployeeProvider;
