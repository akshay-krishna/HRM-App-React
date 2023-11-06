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
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleNaviagtion=()=>{
    navigate("/add_edit_page")
  }
  return (
    <MainWrapper>
      <SectionWrapper className="flex-row">
        <Button
          className="primary flex-row"
          onClick={handleNaviagtion}
        >
          <AddEmployeeIcon /> Add Employee
        </Button>
        <Filter dataSkills={skills} />
      </SectionWrapper>
      <Table column={employeeHeaderArray} data={employeeArray} />
    </MainWrapper>
  );
};

export default Dashboard;
