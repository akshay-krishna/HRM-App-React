import { ItableHeader } from "../../interfaces/DashboardInterface/ItableHeader";
import { useEmployeeContext } from "../../context/EmployeeContext";
import Arrow from "../Icons/Arrow";
import { UPDATE_SORT_CONFIG } from "../../context/actionTypes";

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
        dispatch({ type: UPDATE_SORT_CONFIG, payload: element.id });
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
