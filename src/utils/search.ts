import { useEmployeeContext } from "../context/EmployeeContext";
import { IallTypeDataListing } from "../interfaces/CommonInterfaces/Icommon";

export const searchFunction = (data: IallTypeDataListing[]) => {
  let { state } = useEmployeeContext();
  const filteredEmployees = data.filter((employee) => {
    return employee.firstName
      .toLowerCase()
      .includes(state.searchValue?.toLowerCase());
  });
  return filteredEmployees;
};
