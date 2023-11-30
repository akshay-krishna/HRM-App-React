import Button from "../../components/Button/Button";
import Filter from "../../components/Filter/Filter";
import AddEmployeeIcon from "../../components/Icons/AddEmployeeIcon";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { SET_SELECTED_FILTER } from "../../context/actionTypes";
import { IskillID } from "../../interfaces/CommonInterfaces/IstringID";
import { FilterWrapper, MainWrapper, SectionWrapper } from "./DashboardStyled";
import { employeeHeaderArray } from "./dashboardConstant";
import { useNavigate } from "react-router-dom";

const FilterDashboard = () => {
  const { state, dispatch } = useEmployeeContext();
  const dispatchSelected = (f: IskillID[]) => {
    // setSelectedFilter(f);
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

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <SectionWrapper className="flex-row">
        <Button
          className="primary flex-row"
          onClick={() => navigate("/add-page")}
        >
          <AddEmployeeIcon /> Add Employee
        </Button>
        <FilterDashboard />
      </SectionWrapper>
      <Table column={employeeHeaderArray} />
      <Pagination />
    </MainWrapper>
  );
};

export default Dashboard;
