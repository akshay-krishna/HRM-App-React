import { useState } from "react";
import { useEmployeeContext } from "../../context/EmployeeContext";
// import { IallTypeDataListing } from "../../interfaces/CommonInterfaces/Icommon";
import { ItableHeader } from "../../interfaces/DashboardInterface/ItableHeader";
import { employeeArray } from "../../pages/Dashboard/dashboardConstant";
import { filterArray } from "../../utils/filterFunction";
import DeleteModal from "../DeleteModal/DeleteModal";
import TableHeader from "./TableHeader";
import TableList from "./TableList";
import { TableWrapper } from "./TableStyled";
import { searchFunction } from "../../utils/search";
import { sortFunction } from "../../utils/sortFunction";

const Table = ({ column = [] }: { column: ItableHeader[] }) => {
  const { sortConfig, filters } = useEmployeeContext();
  const [deleteToggle, setDeleteToggle] = useState(false);

  const filteredEmployees = sortFunction(
    sortConfig,
    searchFunction(filterArray(employeeArray, { skills: filters }))
  );

  const columnIds = column.reduce((prevState, currentIteration) => {
    prevState.push(currentIteration.id);
    return prevState;
  }, [] as string[]);
  return (
    <>
      {deleteToggle && (
        <DeleteModal handleModalClose={() => setDeleteToggle(false)} />
      )}
      <TableWrapper>
        <TableHeader column={column} />
        <tbody>
          {filteredEmployees.map((emp: any) => (
            <TableList
              handleModalOpen={() => setDeleteToggle(true)}
              columnIds={columnIds}
              key={emp.id as string}
              data={emp}
            />
          ))}
        </tbody>
      </TableWrapper>
    </>
  );
};

export default Table;
