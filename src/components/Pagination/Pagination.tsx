import { useSearchParams } from "react-router-dom";
import {
  SET_PAGE_NUMBER,
} from "../../redux/actionTypes";
import Button from "../Button/Button";
import PreviousNextPageIcon from "../Icons/PreviousNextPageIcon";
import StartEndIcon from "../Icons/StartEndIcon";
import { PaginationWrapper } from "./PaginationStyled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IemployeeContext } from "../../interfaces/CommonInterfaces/IemployeeContext";

function Pagination() {
  const state = useSelector((state: IemployeeContext) => state);
  const dispatch = useDispatch<Dispatch>();


  const [searchParam, setSearchParam] = useSearchParams();
  let currentPageNum;
  useEffect(() => {
    dispatch({
      type: SET_PAGE_NUMBER,
      payload: searchParam.get("page") || "1",
    });
  }, [searchParam]);

  const handleFirst = () => {
    searchParam.set("page", "1");
    setSearchParam(searchParam);
  };
  const handlePrev = () => {
    if (state.pageNumber < "2") {
      currentPageNum = "1";
    } else {
      currentPageNum = String(Number(state.pageNumber) - 1);
    }
    searchParam.set("page", currentPageNum);
    setSearchParam(searchParam);
  };
  const handleNext = () => {
    if (Number(state.pageNumber) > Number(state.totalPages) - 1) {
      currentPageNum = state.totalPages;
    } else {
      currentPageNum = String(Number(state.pageNumber) + 1);
    }
    searchParam.set("page", currentPageNum);
    setSearchParam(searchParam);
  };
  const handleLast = () => {
    searchParam.set("page", state.totalPages);
    setSearchParam(searchParam);
  };
  return (
    <PaginationWrapper className="flex-row">
      {searchParam.get("page") == "1" || !searchParam.get("page") ? (
        <Button onClick={handleFirst} className="disabled pagination-btn ">
          <StartEndIcon className="mirror" />
        </Button>
      ) : (
        <Button onClick={handleFirst} className="pagination-btn">
          <StartEndIcon className="mirror" />
        </Button>
      )}
      {searchParam.get("page") == "1" || !searchParam.get("page") ? (
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
        onSubmit={(e) => {
          e.preventDefault();
          searchParam.set("page", state.pageNumber);
          setSearchParam(searchParam);
        }}
      >
        <input
          className="pagenumber"
          type="text"
          value={state.pageNumber}
          onChange={(e) => {
            dispatch({
              type: SET_PAGE_NUMBER,
              payload: e.currentTarget.value,
            });
          }}
        ></input>
        <span className="page-text">of {state.totalPages} pages</span>
      </form>
      {state.pageNumber >= state.totalPages ? (
        <Button onClick={handleNext} className="disabled pagination-btn">
          <PreviousNextPageIcon />
        </Button>
      ) : (
        <Button onClick={handleNext} className="pagination-btn">
          <PreviousNextPageIcon />
        </Button>
      )}
      {state.pageNumber >= state.totalPages ? (
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
