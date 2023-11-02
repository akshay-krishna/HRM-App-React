import { rowInterface } from "../../interfaces/rowInterface";
import TableList from "./TableList";
import { TableWrapper } from "./TableStyled";

const Table = ({ employeeArray }: { employeeArray: rowInterface[] }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>
            <div className="flex-row arrow-direction">Employee Id</div>
          </th>
          <th>
            <div className="flex-row arrow-direction">First Name</div>
          </th>
          <th>
            <div className="flex-row arrow-direction">Last Name</div>
          </th>
          <th>
            <div className="flex-row arrow-direction">Role</div>
          </th>
          <th>
            <div className="flex-row arrow-direction">Department</div>
          </th>
          <th>
            <div className="flex-row arrow-direction">Actions</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {employeeArray.map((emp) => (
          <TableList key={emp.id} {...emp} />
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
