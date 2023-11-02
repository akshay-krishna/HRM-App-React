import { rowInterface } from "../../interfaces/rowInterface";

const TableList = ({ id, fName, lName, role, dept }:rowInterface) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{fName}</td>
      <td>{lName}</td>
      <td>{role}</td>
      <td>{dept}</td>
    </tr>
  );
};

export default TableList;
