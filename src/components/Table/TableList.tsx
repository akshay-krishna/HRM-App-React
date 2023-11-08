import { CdataInvalid } from "../../utils/constant";
import { ActionIconWrapper } from "./ActionIconStyled";
import { useNavigate } from "react-router-dom";
import { IallTypeDataListing } from "../../interfaces/CommonInterfaces/Icommon";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";

type tableListingProps = {
  columnIds: string[];
  data: IallTypeDataListing;
};
const TableList = (props: tableListingProps) => {
  const navigate = useNavigate();
  const handleNaviagtion = () => {
    navigate("/employee-detail");
  };
  const { columnIds = [], data } = props;
  return (
    <tr>
      {columnIds.map((ele) => {
        if (ele === "action") {
          return (
            <td>
              <ActionIconWrapper className="flex-row">
                <EditIcon />
                <DeleteIcon />
              </ActionIconWrapper>
            </td>
          );
        } else {
          const value = data[ele] ? data[ele] : CdataInvalid;
          return <td onClick={handleNaviagtion}>{value}</td>;
        }
      })}
    </tr>
  );
};

export default TableList;
