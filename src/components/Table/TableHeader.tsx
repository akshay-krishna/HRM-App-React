import { ItableHeader } from "../../interfaces/DashboardInterface/ItableHeader";

type TableHeaderProps = {
  column: ItableHeader[];
};

const TableHeader = (props: TableHeaderProps) => {
  const { column = [] } = props;
  return (
    <thead>
      <tr>
        {column.map((element) => (
          <th key={element.id}>
            <div className="flex-row arrow-direction">{element.name}</div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
