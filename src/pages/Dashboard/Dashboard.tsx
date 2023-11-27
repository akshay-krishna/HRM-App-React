import Button from "../../components/Button/Button";
import Filter from "../../components/Filter/Filter";
import AddEmployeeIcon from "../../components/Icons/AddEmployeeIcon";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { IskillID } from "../../interfaces/CommonInterfaces/IstringID";
import { FilterWrapper, MainWrapper, SectionWrapper } from "./DashboardStyled";
import { employeeHeaderArray } from "./dashboardConstant";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { selectedFilter, setSelectedFilter } = useEmployeeContext();
  const navigate = useNavigate();
  const dispatchSelected = (f: IskillID[]) => {
    setSelectedFilter(f);
  };
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
            selectedValue={selectedFilter}
            dispatchSelected={dispatchSelected}
          />
        </FilterWrapper>
      </SectionWrapper>
      <Table column={employeeHeaderArray} />
      <Pagination />
    </MainWrapper>
  );
};

export default Dashboard;
