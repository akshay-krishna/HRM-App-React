import { CdataInvalid } from "../../utils/constant";
import editIcon from "../../assets/images/edit-icon.svg";
import deleteIcon from "../../assets/images/delete-icon.svg";
import { ActionIconWrapper } from "./ActionIconStyled";
import { useNavigate } from "react-router-dom";
import { IallTypeDataListing } from "../../interfaces/CommonInterfaces/Icommon";

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
                <img
                  onClick={() => navigate(`/edit-page/${data.id}`)}
                  src={editIcon}
                  alt="edit-icon"
                />
                <img src={deleteIcon} alt="delete-icon" />
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
