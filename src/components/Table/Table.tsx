import { IallTypeDataListing } from "../../interfaces/IcommonInterface";
import { IrowInterface } from "../../interfaces/IrowInterface";
import { ItableHeader } from "../../interfaces/ItableInterface";
import TableHeader from "./TableHeader";
import TableList from "./TableList";
import { TableWrapper } from "./TableStyled";

const Table = ({
  data = [],
  column = [],
}: {
  data: IallTypeDataListing[];
  column: ItableHeader[];
}) => {
  const columnIds = column.reduce((prevState, currentIteration) => {
    prevState.push(currentIteration.id);
    return prevState;
  }, [] as string[]);
  console.log(columnIds);
  return (
    <TableWrapper>
      <TableHeader column={column} />
      <tbody>
        {data.map((emp, index) => (
          <TableList columnIds={columnIds} key={index} data={emp} />
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
