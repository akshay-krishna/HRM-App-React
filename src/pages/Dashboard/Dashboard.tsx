import { rowInterface } from "../../interfaces/rowInterface";
import Table from "../../components/Table/Table";
import { MainWrapper } from "./DashboardStyled";

const Dashboard = () => {
  const employeeArray: rowInterface[] = [
    {
      id: "1",
      fName: "Ashwin",
      lName: "Nair",
      role: "Engineer",
      dept: "Development",
    },
    {
      id: "2",
      fName: "Nijin",
      lName: "Nazar",
      role: "Lead Engineer",
      dept: "Development",
    },
  ];
  return (
    <MainWrapper>
      {/*TODO add employee btn
        filter */}
      <Table employeeArray={employeeArray} />
    </MainWrapper>
  );
};

export default Dashboard;
