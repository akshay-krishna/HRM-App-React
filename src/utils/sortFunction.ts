import { IallTypeDataListing } from "../interfaces/CommonInterfaces/Icommon";

export const sortFunction = (
  config: { sortColumn: string; sortOrder: string },
  data: IallTypeDataListing[]
) => {
  let column = config.sortColumn;
  let flag = config.sortOrder === "asc" ? 1 : -1;
  data.sort((a, b) => {
    if (column == "id") {
      return (a.id - b.id) * flag;
    }
    if (a[column].toLowerCase() < b[column].toLowerCase()) {
      return -1 * flag;
    } else if (a[column].toLowerCase() > b[column].toLowerCase()) {
      return 1 * flag;
    } else return 0;
  });
  return data;
};
