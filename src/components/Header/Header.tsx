import { HeaderStyle, HeaderWrapper, SearchStyle } from "./HeaderStyled";
import SearchIcon from "../Icons/SearchIcon";
import Logo from "../Icons/Logo";
import { useNavigate } from "react-router";
import { ChangeEvent } from "react";
import { setFilters, setSearchValue } from "../../redux/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IemployeeContext } from "../../interfaces/CommonInterfaces/IemployeeContext";

const Header = () => {
  const navigate = useNavigate();
  const state = useSelector((state: IemployeeContext) => state);
  const dispatch = useDispatch<Dispatch>();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };
  return (
    <HeaderWrapper>
      <HeaderStyle>
        <h1>
          <a
            onClick={() => {
              dispatch(setFilters([]));
              navigate("/");
            }}
          >
            <Logo />
          </a>
        </h1>
        {(location.pathname === "/" ||
          location.pathname === "/HRM-App-React/") && (
          <SearchStyle>
            <input
              type="text"
              placeholder="Search By First Name"
              name="search"
              id="search"
              formNoValidate
              autoComplete="off"
              value={state.searchValue}
              onChange={handleSearch}
            />
            <SearchIcon className="search-icon" />
          </SearchStyle>
        )}
      </HeaderStyle>
    </HeaderWrapper>
  );
};
export default Header;
