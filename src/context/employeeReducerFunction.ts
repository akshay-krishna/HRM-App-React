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
  SET_NEXT_PAGE_NUMBER,
  SET_PAGE_NUMBER,
  SET_PREVIOUS_PAGE_NUMBER,
  SET_ROLE_LIST,
  SET_SEARCH_VALUE,
  SET_SELECTED_FILTER,
  SET_SKILL_LIST,
  SET_SORT_CONFIG,
  SET_TOTAL_PAGES,
  UPDATE_SORT_CONFIG,
} from "./actionTypes";

export const employeeReducer = (
  state: IemployeeContext,
  action: IemployeeAction
): IemployeeContext => {
  let currentPageNum;
  switch (action.type) {
    case SET_EMPLOYEE_DATA:
      return { ...state, employeeData: action.payload };
    case SET_ROLE_LIST:
      return { ...state, roleList: action.payload };
    case SET_DEPT_LIST:
      return { ...state, deptList: action.payload };
    case SET_SKILL_LIST:
      return { ...state, skillList: action.payload };
    case SET_SORT_CONFIG:
      return { ...state, sortConfig: action.payload };
    case UPDATE_SORT_CONFIG:
      let order;
      if (state.sortConfig.sortColumn === action.payload) {
        if (state.sortConfig.sortOrder === "desc") {
          order = "asc";
        } else {
          order = "desc";
        }
      } else {
        order = "asc";
      }
      return {
        ...state,
        sortConfig: {
          sortColumn: action.payload,
          sortOrder: order,
        },
      };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    case SET_FILTERS:
      return { ...state, filters: action.payload };
    case SET_CHANGE:
      console.log(action.payload);
      console.log(state.change, "change");
      return { ...state, change: action.payload + state.change };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: action.payload };
    case SET_PREVIOUS_PAGE_NUMBER:
      if (state.pageNumber < "2") {
        currentPageNum = "1";
      } else {
        currentPageNum = String(Number(state.pageNumber) - 1);
      }
      return { ...state, pageNumber: currentPageNum };
    case SET_NEXT_PAGE_NUMBER:
      if (Number(state.pageNumber) > Number(state.totalPages) - 1) {
        currentPageNum = state.totalPages;
      } else {
        currentPageNum = String(Number(state.pageNumber) + 1);
      }
      return { ...state, pageNumber: currentPageNum };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_SELECTED_FILTER:
      return { ...state, selectedFilter: action.payload };
    default:
      return state;
  }
};
