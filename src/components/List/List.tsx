import { handleValue } from "../../utils/handleValue";
import { ListStyleLi, ListStyledUl } from "./ListStyled";

function List({
  listName = "",
  position = "",
  dataArray,
  handleFunction,
}: {
  position?: "top" | string;
  listName?: string;
  dataArray: {
    id: string;
    location?: string;
    role?: string;
    department?: string;
    skill?: string;
  }[];
  handleFunction: (arg: any) => void;
}) {
  return (
    <ListStyledUl
      className={
        position === "filter-search-position"
          ? "skill-dashboard"
          : position === "skill-input-form-position"
          ? "skill-input-list"
          : ""
      }
    >
      {dataArray.map((data) => (
        <ListStyleLi onClick={() => handleFunction(data)} key={data.id}>
          {handleValue(data, listName)}
        </ListStyleLi>
      ))}
    </ListStyledUl>
  );
}

export default List;
