import { ItableHeader } from "../../interfaces/DashboardInterface/ItableHeader";
import { useEmployeeContext } from "../../context/EmployeeContext";
import Arrow from "../Icons/Arrow";
import { SET_SORT_CONFIG } from "../../context/actionTypes";

type TableHeaderProps = {
  column: ItableHeader[];
};

const TableHeader = (props: TableHeaderProps) => {
  const { column = [] } = props;
  const { state, dispatch } = useEmployeeContext();
  const handleValue = (element: ItableHeader) => {
    switch (element.id) {
      case "id":
      case "firstName":
      case "lastName":
        // updateSortConfig(element.id);
        dispatch({type:SET_SORT_CONFIG,})
        break;
      default:
        "";
        break;
    }
  };
  const handleClassName = (element: ItableHeader) => {
    switch (element.id) {
      case "id":
      case "firstName":
      case "lastName":
        return "arrow-direction";
      default:
        return "no-direction";
    }
  };
  return (
    <thead>
      <tr>
        {column.map((element) => (
          <th
            key={element.id}
            onClick={() => {
              handleValue(element);
            }}
          >
            <div className={`flex-row ${handleClassName(element)}`}>
              {element.name}
              {element.id === state.sortConfig.sortColumn ? (
                state.sortConfig.sortOrder === "asc" ? (
                  <Arrow className="ascDirection" />
                ) : (
                  <Arrow className="descDirection" />
                )
              ) : (
                <Arrow className="hidden" />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
