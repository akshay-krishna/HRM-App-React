import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  // useState,
} from "react";
import {
  IemployeeContext,
  IreducerContext,
} from "../interfaces/CommonInterfaces/IemployeeContext";
// import { IskillID } from "../interfaces/CommonInterfaces/IstringID";
import { getData } from "../core/api";
import { rowsPerPage } from "../utils/constant";
import { employeeReducer } from "./employeeReducerFunction";
import {
  SET_DEPT_LIST,
  SET_EMPLOYEE_DATA,
  SET_LOADING,
  SET_ROLE_LIST,
  SET_SKILL_LIST,
  SET_TOTAL_PAGES,
} from "./actionTypes";

const initialContextValues: IemployeeContext = {
  employeeData: [],
  roleList: [],
  deptList: [],
  skillList: [],
  sortConfig: { sortColumn: "id", sortOrder: "asc" },
  searchValue: "",
  filters: [],
  deleteChange: false,
  formChange: false,
  totalPages: "1",
  pageNumber: "1",
  loading: true,
  selectedFilter: [],
};

const EmployeeContext = createContext<IreducerContext>({
  state: initialContextValues,
  dispatch: () => {},
});

const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(employeeReducer, initialContextValues);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: SET_LOADING, payload: true });
        const response = await getData(
          `/employee?limit=${rowsPerPage}&offset=${
            (Number(state.pageNumber) - 1) * rowsPerPage
          }&sortBy=${state.sortConfig.sortColumn}&sortDir=${
            state.sortConfig.sortOrder
          }`
        );
        const result = response.data.data.employees;
        dispatch({ type: SET_EMPLOYEE_DATA, payload: result });
        dispatch({
          type: SET_TOTAL_PAGES,
          payload: String(Math.ceil(response.data.data.count / rowsPerPage)),
        });
        dispatch({ type: SET_LOADING, payload: false });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    const fetchRole = async () => {
      try {
        const response = await getData("/roles");
        const result = response.data;
        dispatch({ type: SET_ROLE_LIST, payload: result });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRole();

    const fetchDept = async () => {
      try {
        const response = await getData("/departments");
        const result = response.data;
        dispatch({ type: SET_DEPT_LIST, payload: result });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDept();

    const fetchSkills = async () => {
      try {
        const response = await getData("/skills");
        const result = response.data.data;
        dispatch({ type: SET_SKILL_LIST, payload: result });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSkills();
  }, [
    state.sortConfig.sortColumn,
    state.sortConfig.sortOrder,
    state.deleteChange,
    state.formChange,
    state.pageNumber,
  ]);

  // const updateSortConfig = (sortColumn: string) => {
  //   setSortConfig((prevConfig) => ({setFilters
  //     sortColumn,
  //     sortOrder:
  //       prevConfig.sortColumn === sortColumn
  //         ? prevConfig.sortOrder === "desc"
  //           ? "asc"
  //           : "desc"
  //         : "asc",
  //   }));
  // };

  // const updateSearch = (currentSearch: string) => {
  //   setSearchValue(currentSearch);
  // };

  // const updateFilters = (filter: IskillID) => {
  //   setFilters((prev) => [...prev, filter] as IskillID[]);
  // };

  // const removeFilter = (updatedFilter: IskillID[]) => {
  //   setFilters(updatedFilter);
  // };

  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => {
  return useContext(EmployeeContext);
};

export default EmployeeProvider;
