import { IallTypeDataListing } from "../../interfaces/IcommonInterface";
import { CdataInvalid } from "../../utils/constant";
import editIcon from "../../assets/images/edit-icon.svg";
import deleteIcon from "../../assets/images/delete-icon.svg";
import { ActionIconWrapper } from "./ActionIconStyled";

type tableListingProps = {
  columnIds: string[];
  data: IallTypeDataListing;
};
const TableList = (props: tableListingProps) => {
  const { columnIds = [], data } = props;
  return (
    <tr>
      {columnIds.map((ele) => {
        if (ele === "action") {
          return (
            <td>
              <ActionIconWrapper className="flex-row">
                <img src={editIcon} alt="edit-icon" />
                <img src={deleteIcon} alt="delete-icon" />
              </ActionIconWrapper>
            </td>
          );
        } else {
          const value = data[ele] ? data[ele] : CdataInvalid;
          return <td>{value}</td>;
        }
      })}
    </tr>
  );
};

export default TableList;
