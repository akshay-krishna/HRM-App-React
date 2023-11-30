import { useEmployeeContext } from "../../context/EmployeeContext";
import {
  SET_NEXT_PAGE_NUMBER,
  SET_PAGE_NUMBER,
  SET_PREVIOUS_PAGE_NUMBER,
} from "../../context/actionTypes";
import Button from "../Button/Button";
import PreviousNextPageIcon from "../Icons/PreviousNextPageIcon";
import StartEndIcon from "../Icons/StartEndIcon";
import { PaginationWrapper } from "./PaginationStyled";

function Pagination() {
  const { state, dispatch } = useEmployeeContext();
  const handleFirst = () => {
    // setPageNumber("1");
    dispatch({ type: SET_PAGE_NUMBER, payload: "1" });
  };
  const handlePrev = () => {
    // setPageNumber((prev) => {
    //   if (prev < "2") {
    //     return "1";
    //   } else {
    //     return String(Number(prev) - 1);
    //   }
    // });
    dispatch({ type: SET_PREVIOUS_PAGE_NUMBER, payload: state.pageNumber });
  };
  const handleNext = () => {
    // setPageNumber((prev) => {
    //   if (Number(prev) > Number(totalPages) - 1) {
    //     return totalPages;
    //   } else {
    //     return String(Number(prev) + 1);
    //   }
    // });
    dispatch({ type: SET_NEXT_PAGE_NUMBER, payload: state.pageNumber });
  };
  const handleLast = () => {
    // setPageNumber(totalPages);
    dispatch({ type: SET_PAGE_NUMBER, payload: state.totalPages });
  };
  return (
    <PaginationWrapper className="flex-row">
      <Button onClick={handleFirst} className="pagination-btn">
        <StartEndIcon className="mirror" />
      </Button>
      <Button onClick={handlePrev} className="pagination-btn">
        <PreviousNextPageIcon className="mirror" />
      </Button>
      <form
        className="flex-row pagination-input"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="pagenumber"
          type="text"
          value={state.pageNumber}
          onInput={(e) => {
            // setPageNumber(e.currentTarget.value);
            dispatch({ type: SET_PAGE_NUMBER, payload: e.currentTarget.value });
          }}
        ></input>
        <span className="page-text">of {state.totalPages} pages</span>
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
