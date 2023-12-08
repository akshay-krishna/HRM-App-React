import { useSelector } from "react-redux";
import { IallTypeDataListing } from "../interfaces/CommonInterfaces/Icommon";
import { IemployeeContext } from "../interfaces/CommonInterfaces/IemployeeContext";

export const searchFunction = (data: IallTypeDataListing[]) => {
  const state = useSelector((state: IemployeeContext) => state);

  const filteredEmployees = data.filter((employee) => {
    return employee.firstName
      .toLowerCase()
      .includes(state.searchValue?.toLowerCase());
  });
  return filteredEmployees;
};
