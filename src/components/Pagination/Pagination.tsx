import { useEmployeeContext } from "../../context/EmployeeContext";
import Button from "../Button/Button";
import PreviousNextPageIcon from "../Icons/PreviousNextPageIcon";
import StartEndIcon from "../Icons/StartEndIcon";
import { PaginationWrapper } from "./PaginationStyled";

function Pagination() {
  const { totalPages, pageNumber, setPageNumber } = useEmployeeContext();

  const handleFirst = () => {
    setPageNumber("1");
  };
  const handlePrev = () => {
    setPageNumber((prev) => {
      if (prev < "2") {
        return "1";
      } else {
        return String(Number(prev) - 1);
      }
    });
  };
  const handleNext = () => {
    setPageNumber((prev) => {
      if (Number(prev) > Number(totalPages) - 1) {
        return totalPages;
      } else {
        return String(Number(prev) + 1);
      }
    });
  };
  const handleLast = () => {
    setPageNumber(totalPages);
  };

  return (
    <PaginationWrapper className="flex-row">
      <Button onClick={handleFirst} className="pagination-btn">
        <StartEndIcon className="mirror" />
      </Button>
      <Button onClick={handlePrev} className="pagination-btn">
        <PreviousNextPageIcon className="mirror" />
      </Button>
      <form className="flex-row pagination-input" onSubmit={(e) => e.preventDefault()}>
        <input
          className="pagenumber"
          type="text"
          value={pageNumber}
          onInput={(e) => {
            setPageNumber(e.currentTarget.value);
          }}
        ></input>
        <span className="page-text">of {totalPages} pages</span>
      </form>
      <Button onClick={handleNext} className="pagination-btn">
        <PreviousNextPageIcon />
      </Button>
      <Button onClick={handleLast} className="pagination-btn">
        <StartEndIcon />
      </Button>
    </PaginationWrapper>
  );
}

export default Pagination;
