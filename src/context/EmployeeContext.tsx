import { ReactNode, createContext, useContext, useState } from "react";
import { IemployeeContext } from "../interfaces/CommonInterfaces/IemployeeContext";
import { IstringID } from "../interfaces/CommonInterfaces/IstringID";

const initialContextValues: IemployeeContext = {
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
  const [sortConfig, setSortConfig] = useState(initialContextValues.sortConfig);

  const updateSortConfig = (sortColumn: string) => {
    console.log(sortColumn);
    setSortConfig((prevConfig) => ({
      sortColumn,
      sortOrder:
        prevConfig.sortColumn === sortColumn
          ? prevConfig.sortOrder === "desc"
            ? "asc"
            : "desc"
          : "asc",
    }));
    console.log(sortConfig.sortOrder);
  };
  const [searchValue, setSearchValue] = useState(
    initialContextValues.searchValue
  );

  const updateSearch = (currentSearch: string) => {
    setSearchValue(currentSearch);
  };

  const [filters, setFilters] = useState<IstringID[]>(
    initialContextValues.filters
  );
  const updateFilters = (filter: IstringID) => {
    setFilters((prev) => [...prev, filter] as IstringID[]);
  };

  const removeFilter = (updatedFilter: IstringID[]) => {
    setFilters(updatedFilter);
  };

  const value: IemployeeContext = {
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
