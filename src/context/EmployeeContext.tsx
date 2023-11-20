import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IemployeeContext } from "../interfaces/CommonInterfaces/IemployeeContext";
import { IskillID, IstringID } from "../interfaces/CommonInterfaces/IstringID";
import { getData } from "../core/api";

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
  updateFilters: () => {},
  removeFilter: () => {},
};

const EmployeeContext = createContext(initialContextValues);

const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [employeeData, setEmployeeData] = useState(
    initialContextValues.employeeData
  );
  const [roleList, setRoleList] = useState(initialContextValues.roleList);
  const [deptList, setDeptList] = useState(initialContextValues.deptList);
  const [skillList, setSkillList] = useState(initialContextValues.skillList);

  const [sortConfig, setSortConfig] = useState(initialContextValues.sortConfig);
  const [searchValue, setSearchValue] = useState(
    initialContextValues.searchValue
  );
  const [filters, setFilters] = useState<IskillID[]>(
    initialContextValues.filters
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(
          `/employee?sortBy=${sortConfig.sortColumn}&sortDir=${sortConfig.sortOrder}`
        );
        // console.log(response);
        const result = response.data.data.employees;
        console.log(result);
        setEmployeeData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    const fetchRole = async () => {
      try {
        const response = await getData("/roles");
        // console.log(response.data, ":rolelist");
        // console.log(roleArray, ":role array");
        const result = response.data;
        setRoleList(result);
        // console.log(result, "resuilt");
        // return result;
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
  }, [sortConfig.sortColumn, sortConfig.sortOrder]);

  // console.log(employeeData);

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
    updateFilters,
    removeFilter,
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
