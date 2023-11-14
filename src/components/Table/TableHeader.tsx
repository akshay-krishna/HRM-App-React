import { useContext } from "react";
import { ItableHeader } from "../../interfaces/DashboardInterface/ItableHeader";
import { useEmployeeContext } from "../../context/EmployeeContext";

type TableHeaderProps = {
  column: ItableHeader[];
};

const TableHeader = (props: TableHeaderProps) => {
  const { column = [] } = props;
  const { updateSortConfig } = useEmployeeContext();
  const handleHeadClick = (element: any) => {};
  return (
    <thead>
      <tr>
        {column.map((element) => (
          <th key={element.id} onClick={() => updateSortConfig(element.id)}>
            <div className="flex-row arrow-direction">{element.name}</div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
