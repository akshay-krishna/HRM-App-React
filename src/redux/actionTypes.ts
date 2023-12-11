import { IskillID } from "../interfaces/CommonInterfaces/IstringID";

export const SET_EMPLOYEE_DATA = "SET_EMPLOYEE_DATA";
export const SET_ROLE_LIST = "SET_ROLE_LIST";
export const SET_DEPT_LIST = "SET_DEPT_LIST";
export const SET_SKILL_LIST = "SET_SKILL_LIST";
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_FILTERS = "SET_FILTERS";
export const SET_CHANGE = "SET_CHANGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
export const SET_SELECTED_FILTER = "SET_SELECTED_FILTER";
export const SET_LOADING = "SET_LOADING";

export const setEmployeeData = (payload: any) => {
  return { type: SET_EMPLOYEE_DATA, payload };
};

export const setRoleList = (payload: any) => {
  return { type: SET_ROLE_LIST, payload };
};

export const setDeptList = (payload: any) => {
  return { type: SET_DEPT_LIST, payload };
};

export const setSkillList = (payload: any) => {
  return { type: SET_SKILL_LIST, payload };
};

export const setSearchValue = (payload: string) => {
  return { type: SET_SEARCH_VALUE, payload };
};

export const setFilters = (payload: (IskillID | IskillID[])[]) => {
  return { type: SET_FILTERS, payload };
};

export const setChange = (payload: number) => {
  return { type: SET_CHANGE, payload };
};

export const setTotalPages = (payload: string) => {
  return { type: SET_TOTAL_PAGES, payload };
};

export const setLoading = (payload: boolean) => {
  return { type: SET_LOADING, payload };
};

export const setSelectedFilter = (payload: IskillID[]) => {
  return { type: SET_SELECTED_FILTER, payload };
};

export const setPageNumber = (payload: string) => {
  return { type: SET_PAGE_NUMBER, payload };
};
