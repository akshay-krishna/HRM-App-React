import { ItableHeader } from "../../interfaces/DashboardInterface/ItableHeader";
import Arrow from "../Icons/Arrow";
import { useSearchParams } from "react-router-dom";

type TableHeaderProps = {
  column: ItableHeader[];
};

const TableHeader = (props: TableHeaderProps) => {
  const { column = [] } = props;
  const [searchParam, setSearchParam] = useSearchParams({
    page: "1",
    sortBy: "id",
    sortDir: "asc",
  });
  const handleValue = (element: ItableHeader) => {
    switch (element.id) {
      case "id":
      case "firstName":
      case "lastName":
        const prevColumn = searchParam.get("sortBy");
        searchParam.set("sortBy", element.id);
        searchParam.set(
          "sortDir",
          prevColumn == element.id
            ? searchParam.get("sortDir") === "desc"
              ? "asc"
              : "desc"
            : "asc"
        );
        setSearchParam(searchParam);
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
              {element.id === searchParam.get("sortBy") ? (
                searchParam.get("sortDir") === "asc" ? (
                  <Arrow className="ascDirection" />
                ) : (
                  <Arrow className="descDirection" />
                )
              ) : null}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
