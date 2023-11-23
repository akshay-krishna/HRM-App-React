import { useEmployeeContext } from "../context/EmployeeContext";
import { IallTypeDataListing } from "../interfaces/CommonInterfaces/Icommon";

export const searchFunction = (data: IallTypeDataListing[]) => {
  let { searchValue } = useEmployeeContext();
  const filteredEmployees = data.filter((employee) => {
    return employee.firstName.toLowerCase().includes(searchValue?.toLowerCase());
  });
  return filteredEmployees;
};
