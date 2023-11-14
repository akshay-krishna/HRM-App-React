import { useEmployeeContext } from "../context/EmployeeContext";
import { IallTypeDataListing } from "../interfaces/CommonInterfaces/Icommon";

export const searchFunction = (data: IallTypeDataListing[]) => {
  let { searchValue } = useEmployeeContext();
  // console.log(searchValue, "inside searchFunction");
  const filteredEmployees = data.filter((employee) => {
    // console.log(employee.fName);
    return employee.fName.toLowerCase().includes(searchValue?.toLowerCase());
  });
  return filteredEmployees;
};
