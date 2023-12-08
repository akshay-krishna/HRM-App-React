import { useDispatch, useSelector } from "react-redux";
import { IemployeeContext } from "../../interfaces/CommonInterfaces/IemployeeContext";
import { Dispatch } from "redux";
import { IskillID } from "../../interfaces/CommonInterfaces/IstringID";
import { SET_SELECTED_FILTER } from "../../redux/actionTypes";
import { FilterWrapper } from "./DashboardStyled";
import Filter from "../../components/Filter/Filter";

const FilterDashboard = () => {
  const state = useSelector((state: IemployeeContext) => state);
  const dispatch = useDispatch<Dispatch>();
  const dispatchSelected = (f: IskillID[]) => {
    dispatch({ type: SET_SELECTED_FILTER, payload: f });
  };
  return (
    <FilterWrapper>
      <Filter
        className="filter-search"
        selectedValue={state.selectedFilter}
        dispatchSelected={dispatchSelected}
      />
    </FilterWrapper>
  );
};

export default FilterDashboard;
