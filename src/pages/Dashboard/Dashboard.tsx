import Button from "../../components/Button/Button";
import Filter from "../../components/Filter/Filter";
import AddEmployeeIcon from "../../components/Icons/AddEmployeeIcon";
import Table from "../../components/Table/Table";
import { MainWrapper, SectionWrapper } from "./DashboardStyled";
import {
  employeeArray,
  employeeHeaderArray,
  skills,
} from "./dashboardConstant";

const Dashboard = () => {
  return (
    <MainWrapper>
      <SectionWrapper className="flex-row">
        <Button className="primary flex-row" onClick={() => {}}>
          <AddEmployeeIcon /> Add Employee
        </Button>
        <Filter dataSkills={skills} />
      </SectionWrapper>
      <Table column={employeeHeaderArray} data={employeeArray} />
    </MainWrapper>
  );
};

export default Dashboard;
