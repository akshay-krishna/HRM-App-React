import { ListStyleLi, ListStyledUl } from "./ListStyled";

function List({
  position="",
  dataArray,
  handleFunction,
}: {
  position?: "top" | string
  dataArray: { id: string; name: string }[];
  handleFunction: (arg: any) => void;
}) {
  return (
    <ListStyledUl className={position === "top" ? "topPosition" : ""}>
      {dataArray.map((data) => (
        <ListStyleLi onClick={() => handleFunction(data)} key={data.id}>
          {data.name}
        </ListStyleLi>
      ))}
    </ListStyledUl>
  );
}

export default List;
