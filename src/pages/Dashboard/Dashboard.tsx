import Button from "../../components/Button/Button";
import AddEmployeeIcon from "../../components/Icons/AddEmployeeIcon";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import { MainWrapper, SectionWrapper } from "./DashboardStyled";
import { employeeHeaderArray } from "./dashboardConstant";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IemployeeContext } from "../../interfaces/CommonInterfaces/IemployeeContext";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useEffect } from "react";
import { getData } from "../../core/api";
import {
  setDeptList,
  setEmployeeData,
  setLoading,
  setRoleList,
  setTotalPages,
} from "../../redux/actionTypes";
import { rowsPerPage } from "../../utils/constant";
import { sortFunction } from "../../utils/sort";
import FilterDashboard from "./FilterDashboard";

const Dashboard = () => {
  const navigate = useNavigate();
  const state = useSelector((state: IemployeeContext) => state);
  const dispatch = useDispatch<Dispatch>();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await getData("/employee", {
          params: {
            limit: rowsPerPage,
            offset: (Number(searchParams.get("page") || "1") - 1) * rowsPerPage,
            sortBy: searchParams.get("sortBy") || "id",
            sortDir: searchParams.get("sortDir") || "asc",
          },
        });
        const result = response.data.data.employees;

        dispatch(setEmployeeData(result));
        dispatch(
          setTotalPages(
            String(Math.ceil(response.data.data.count / rowsPerPage))
          )
        );
        dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    const fetchRole = async () => {
      try {
        const response = await getData("/roles");
        const result = response.data;
        dispatch(setRoleList(sortFunction(result, "role")));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRole();

    const fetchDept = async () => {
      try {
        const response = await getData("/departments");
        const result = response.data;
        dispatch(setDeptList(sortFunction(result, "department")));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDept();

    const fetchSkills = async () => {
      try {
        const response = await getData("/skills");
        const result = response.data.data;
        dispatch(setDeptList(sortFunction(result, "skill")));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSkills();
  }, [state.change, searchParams]);
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
