import { useState } from "react";
import { useEmployeeContext } from "../../context/EmployeeContext";
// import { IallTypeDataListing } from "../../interfaces/CommonInterfaces/Icommon";
import { ItableHeader } from "../../interfaces/DashboardInterface/ItableHeader";
// import { employeeArray } from "../../pages/Dashboard/dashboardConstant";
import { filterArray } from "../../utils/filterFunction";
import DeleteModal from "../DeleteModal/DeleteModal";
import TableHeader from "./TableHeader";
import TableList from "./TableList";
import { TableWrapper } from "./TableStyled";
import { searchFunction } from "../../utils/search";
import { deleteData } from "../../core/api";

const Table = ({ column = [] }: { column: ItableHeader[] }) => {
  const { filters, employeeData, setDeleteChange } = useEmployeeContext();
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [deleteID, setDeleteID] = useState();
  // console.log(employeeData, ":in table");
  const filteredEmployees = searchFunction(
    filterArray(employeeData, { skills: filters })
  );
  // console.log(filteredEmployees, ":filtered employees");
  const columnIds = column.reduce((prevState, currentIteration) => {
    prevState.push(currentIteration.id);
    return prevState;
  }, [] as string[]);

  return (
    <>
      {deleteToggle && (
        <DeleteModal
          handleModalClose={() => {
            console.log("cancel");
            setDeleteToggle(false);
          }}
          deleteUser={() => {
            console.log("delete");
            console.log(deleteID);
            const deleteUser = async () => {
              try {
                const response = await deleteData(`employee/${deleteID}`);
                const result = response.data;
                console.log(result, "result");
                setDeleteToggle(false);
                setDeleteChange(true);
              } catch (error) {
                console.error("Error fetching data:", error);
              }
            };
            deleteUser();
          }}
        />
      )}
      <TableWrapper>
        <TableHeader column={column} />
        <tbody>
          {filteredEmployees.map((emp: any) => (
            <TableList
              handleModalOpen={() => {
                setDeleteID(emp.id);
                setDeleteToggle(true);
                setDeleteChange(false);
              }}
              columnIds={columnIds}
              key={emp.id as string}
              data={{
                ...emp,
                role: emp.role ? emp.role.role : "",
                department: emp.department ? emp.department.department : "",
              }}
            />
          ))}
        </tbody>
      </TableWrapper>
    </>
  );
};

export default Table;
