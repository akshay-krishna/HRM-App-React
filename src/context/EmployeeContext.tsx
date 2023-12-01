import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  IemployeeContext,
  IreducerContext,
} from "../interfaces/CommonInterfaces/IemployeeContext";
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
import { sortFunction } from "../utils/sort";

const initialContextValues: IemployeeContext = {
  employeeData: [],
  roleList: [],
  deptList: [],
  skillList: [],
  sortConfig: { sortColumn: "id", sortOrder: "asc" },
  searchValue: "",
  filters: [],
  change: 1,
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
        dispatch({
          type: SET_ROLE_LIST,
          payload: sortFunction(result, "role"),
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRole();

    const fetchDept = async () => {
      try {
        const response = await getData("/departments");
        const result = response.data;
        dispatch({
          type: SET_DEPT_LIST,
          payload: sortFunction(result, "department"),
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDept();

    const fetchSkills = async () => {
      try {
        const response = await getData("/skills");
        const result = response.data.data;
        dispatch({
          type: SET_SKILL_LIST,
          payload: sortFunction(result, "skill"),
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSkills();
  }, [
    state.sortConfig.sortColumn,
    state.sortConfig.sortOrder,
    state.change,
    state.pageNumber,
  ]);

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
