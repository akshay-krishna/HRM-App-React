import Button from "../../components/Button/Button";
import Filter, { selected } from "../../components/Filter/Filter";
import AddEmployeeIcon from "../../components/Icons/AddEmployeeIcon";
import Table from "../../components/Table/Table";
import { FilterWrapper, MainWrapper, SectionWrapper } from "./DashboardStyled";
import {
  employeeHeaderArray,
} from "./dashboardConstant";
import { useNavigate } from "react-router-dom";

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
        <FilterWrapper>
          <Filter
            className="filter-search"
            selectedValue={selected}
          />
        </FilterWrapper>
      </SectionWrapper>
      <Table column={employeeHeaderArray} />
    </MainWrapper>
  );
};

export default Dashboard;
