import { CdataInvalid } from "../../utils/constant";
import { ActionIconWrapper } from "./ActionIconStyled";
import { useNavigate } from "react-router-dom";
import { IallTypeDataListing } from "../../interfaces/CommonInterfaces/Icommon";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";

type tableListingProps = {
  columnIds: string[];
  data: IallTypeDataListing;
};
const TableList = (props: tableListingProps) => {
  const navigate = useNavigate();
  const { columnIds = [], data } = props;

  return (
    <tr>
      {columnIds.map((ele) => {
        if (ele === "action") {
          return (
            <td key={ele}>
              <ActionIconWrapper className="flex-row">
                <EditIcon onClick={() => navigate(`/edit-page/${data.id}`)} />
                <DeleteIcon />
              </ActionIconWrapper>
            </td>
          );
        } else {
          const value = data[ele] ? data[ele] : CdataInvalid;
          return (
            <td
              key={ele}
              onClick={() => navigate(`/employee-details/${data.id}`)}
            >
              {value}
            </td>
          );
        }
      })}
    </tr>
  );
};

export default TableList;
