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
import { SET_CHANGE } from "../../context/actionTypes";

const Table = ({ column = [] }: { column: ItableHeader[] }) => {
  const { state, dispatch } = useEmployeeContext();
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [deleteID, setDeleteID] = useState();

  const filteredEmployees = searchFunction(
    filterArray(state.employeeData, {
      skills: state.selectedFilter,
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
                dispatch({ type: SET_CHANGE, payload: 1 });
              } catch (error) {
                displayToast("Couldn't delete the user", "error");
                console.error("Error fetching data:", error);
              }
            };
            deleteUser();
          }}
        />
      )}
      {state.loading && <LoaderComponent style="overlay" />}
      <TableWrapper>
        <TableHeader column={column} />
        <tbody>
          {filteredEmployees.length ? (
            filteredEmployees.map((emp: any) => (
              <TableList
                handleModalOpen={() => {
                  setDeleteID(emp.id);
                  setDeleteToggle(true);
                }}
                columnIds={columnIds}
                key={emp.id as string}
                data={{
                  ...emp,
                  role: emp.role ? emp.role.role : "",
                  department: emp.department ? emp.department.department : "",
                }}
              />
            ))
          ) : (
            <tr>
              <td className="no-data" colSpan={column.length + 1}>
                No data Found
              </td>
            </tr>
          )}
        </tbody>
      </TableWrapper>
    </>
  );
};

export default Table;
