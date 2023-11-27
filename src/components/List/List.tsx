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
  const handleValue = (data: any): string => {
    switch (listName) {
      case "role":
        return data.role;
      case "department":
        return data.department;
      case "location":
        return data.location;
      case "skills":
        return data.skill;
      default:
        return "";
    }
  };
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
          {
            handleValue(data)
          }
        </ListStyleLi>
      ))}
    </ListStyledUl>
  );
}

export default List;
