import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IemployeeContext } from "../interfaces/CommonInterfaces/IemployeeContext";
import { IstringID } from "../interfaces/CommonInterfaces/IstringID";
import { getData } from "../core/api";

const initialContextValues: IemployeeContext = {
  employeeData: [],
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
  const [sortConfig, setSortConfig] = useState(initialContextValues.sortConfig);
  const [searchValue, setSearchValue] = useState(
    initialContextValues.searchValue
  );
  const [filters, setFilters] = useState<IstringID[]>(
    initialContextValues.filters
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData("/employee");
        const result = response.data.data.employees;
        setEmployeeData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
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

  const updateFilters = (filter: IstringID) => {
    setFilters((prev) => [...prev, filter] as IstringID[]);
  };

  const removeFilter = (updatedFilter: IstringID[]) => {
    setFilters(updatedFilter);
  };

  const value: IemployeeContext = {
    employeeData,
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
