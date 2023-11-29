import { useState } from "react";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { ItableHeader } from "../../interfaces/DashboardInterface/ItableHeader";
import { filterArray } from "../../utils/filterFunction";
import DeleteModal from "../DeleteModal/DeleteModal";
import TableHeader from "./TableHeader";
import TableList from "./TableList";
import { TableWrapper } from "./TableStyled";
import { deleteData } from "../../core/api";
import displayToast from "../../utils/displayToast";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import { searchFunction } from "../../utils/search";

const Table = ({ column = [] }: { column: ItableHeader[] }) => {
  const { employeeData, setDeleteChange, loading, selectedFilter } =
    useEmployeeContext();
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [deleteID, setDeleteID] = useState();
  const filteredEmployees = searchFunction(
    filterArray(employeeData, {
      skills: selectedFilter,
    })
  );

  const columnIds = column.reduce((prevState, currentIteration) => {
    prevState.push(currentIteration.id);
    return prevState;
  }, [] as string[]);
  return (
    <>
      {deleteToggle && (
        <DeleteModal
          handleModalClose={() => {
            setDeleteToggle(false);
          }}
          deleteUser={() => {
            const deleteUser = async () => {
              try {
                await deleteData(`employee/${deleteID}`);
                displayToast("Record deleted successfully", "success");
                setDeleteToggle(false);
                setDeleteChange(true);
              } catch (error) {
                displayToast("Couldn't delete the user", "error");
                console.error("Error fetching data:", error);
              }
            };
            deleteUser();
          }}
        />
      )}
      {loading && <LoaderComponent style="overlay" />}
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
