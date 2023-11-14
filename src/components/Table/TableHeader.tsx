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
  return (
    <thead>
      <tr>
        {column.map((element) => (
          <th key={element.id} onClick={() => updateSortConfig(element.id)}>
            <div className="flex-row arrow-direction">
              {element.name}
              {element.id === sortConfig.sortColumn &&
              element.id != "action" ? (
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
