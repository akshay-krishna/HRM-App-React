import {
  IemployeeAction,
  IemployeeContext,
} from "../interfaces/CommonInterfaces/IemployeeContext";
import {
  SET_CHANGE,
  SET_DEPT_LIST,
  SET_EMPLOYEE_DATA,
  SET_FILTERS,
  SET_LOADING,
  SET_PAGE_NUMBER,
  SET_ROLE_LIST,
  SET_SEARCH_VALUE,
  SET_SELECTED_FILTER,
  SET_SKILL_LIST,
  SET_TOTAL_PAGES,
} from "./actionTypes";

export const employeeReducer = (
  state: IemployeeContext,
  action: IemployeeAction
): IemployeeContext => {
  switch (action.type) {
    case SET_EMPLOYEE_DATA:
      return { ...state, employeeData: action.payload };
    case SET_ROLE_LIST:
      return { ...state, roleList: action.payload };
    case SET_DEPT_LIST:
      return { ...state, deptList: action.payload };
    case SET_SKILL_LIST:
      return { ...state, skillList: action.payload };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    case SET_FILTERS:
      return { ...state, filters: action.payload };
    case SET_CHANGE:
      return { ...state, change: action.payload + state.change };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_SELECTED_FILTER:
      return { ...state, selectedFilter: action.payload };
    default:
      return state;
  }
};
