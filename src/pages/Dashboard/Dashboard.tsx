import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import { MainWrapper } from "./DashboardStyled";
import { employeeArray, employeeHeaderArray } from "./dashboardConstant";

const Dashboard = () => {
  return (
    <MainWrapper>
      {/*TODO add employee btn
        filter */}
      <Button btnType="primary" type_name="button" description="Add Employee" />
      <Table column={employeeHeaderArray} data={employeeArray} />
    </MainWrapper>
  );
};

export default Dashboard;
