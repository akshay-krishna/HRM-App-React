import { ReactNode, createContext, useContext, useState } from "react";
import { IemployeeContext } from "../interfaces/CommonInterfaces/IemployeeContext";
import { IstringID } from "../interfaces/CommonInterfaces/IstringID";

const initialContextValues: IemployeeContext = {
  filters: [],
  updateFilters: () => {},
  removeFilter: () => {}
};

const EmployeeContext = createContext(initialContextValues);

const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<IstringID[]>(
    initialContextValues.filters
  );
  const updateFilters = (filter: IstringID) => {
    setFilters(prev => [...prev,filter] as IstringID[])
  };


  const removeFilter = (updatedFilter: IstringID[]) => {
    setFilters(updatedFilter)
  }
  
  const value: IemployeeContext = {
    filters,
    updateFilters,
    removeFilter
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
