import { ItableHeader } from "../../interfaces/DashboardInterface/ItableHeader";
import { useEmployeeContext } from "../../context/EmployeeContext";
import Arrow from "../Icons/Arrow";

type TableHeaderProps = {
  column: ItableHeader[];
};

const TableHeader = (props: TableHeaderProps) => {
  const { column = [] } = props;
  const { sortConfig, updateSortConfig } = useEmployeeContext();
  // const handleHeadClick = (element: any) => {};
  // console.log(column);
  let className = "";

  return (
    <thead>
      <tr>
        {column.map((element) => (
          <th
            key={element.id}
            onClick={() => {
              element.id == "id" ||
              element.id == "firstName" ||
              element.id == "lastName"
                ? updateSortConfig(element.id)
                : "";
            }}
          >
            <div
              className={`flex-row ${
                element.id == "id" ||
                element.id == "firstName" ||
                element.id == "lastName"
                  ? (className = "arrow-direction")
                  : (className = "no-direction")
              }`}
            >
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
