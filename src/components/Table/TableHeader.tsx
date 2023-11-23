import { ItableHeader } from "../../interfaces/DashboardInterface/ItableHeader";
import { useEmployeeContext } from "../../context/EmployeeContext";
import Arrow from "../Icons/Arrow";

type TableHeaderProps = {
  column: ItableHeader[];
};

const TableHeader = (props: TableHeaderProps) => {
  const { column = [] } = props;
  const { sortConfig, updateSortConfig } = useEmployeeContext();
  let className = "";
  const handleValue = (element: ItableHeader) => {
    switch (element.id) {
      case "id":
      case "firstName":
      case "lastName":
        updateSortConfig(element.id);
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
        return (className = "arrow-direction");
      default:
        return (className = "no-direction");
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
              {element.id === sortConfig.sortColumn ? (
                sortConfig.sortOrder === "asc" ? (
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
