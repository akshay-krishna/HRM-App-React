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
    dispatch({ type: SET_PAGE_NUMBER, payload: "1" });
  };
  const handlePrev = () => {
    dispatch({ type: SET_PREVIOUS_PAGE_NUMBER, payload: state.pageNumber });
  };
  const handleNext = () => {
    dispatch({ type: SET_NEXT_PAGE_NUMBER, payload: state.pageNumber });
  };
  const handleLast = () => {
    dispatch({ type: SET_PAGE_NUMBER, payload: state.totalPages });
  };

  return (
    <PaginationWrapper className="flex-row">
      {state.pageNumber == "1" ? (
        <Button onClick={handleFirst} className="disabled pagination-btn ">
          <StartEndIcon className="mirror" />
        </Button>
      ) : (
        <Button onClick={handleFirst} className="pagination-btn">
          <StartEndIcon className="mirror" />
        </Button>
      )}
      {state.pageNumber == "1" ? (
        <Button onClick={handleFirst} className="disabled pagination-btn">
          <StartEndIcon className="mirror" />
        </Button>
      ) : (
        <Button onClick={handlePrev} className="pagination-btn">
          <PreviousNextPageIcon className="mirror" />
        </Button>
      )}
      <form
        className="flex-row pagination-input"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="pagenumber"
          type="text"
          value={state.pageNumber}
          onInput={(e) => {
            dispatch({
              type: SET_PAGE_NUMBER,
              payload: e.currentTarget.value,
            });
          }}
        ></input>
        <span className="page-text">of {state.totalPages} pages</span>
      </form>
      {state.pageNumber == state.totalPages ? (
        <Button onClick={handleNext} className="disabled pagination-btn">
          <PreviousNextPageIcon />
        </Button>
      ) : (
        <Button onClick={handleNext} className="pagination-btn">
          <PreviousNextPageIcon />
        </Button>
      )}
      {state.pageNumber == state.totalPages ? (
        <Button onClick={handleLast} className="disabled pagination-btn">
          <StartEndIcon />
        </Button>
      ) : (
        <Button onClick={handleLast} className="pagination-btn">
          <StartEndIcon />
        </Button>
      )}
    </PaginationWrapper>
  );
}

export default Pagination;
