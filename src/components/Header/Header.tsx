import { HeaderStyle, HeaderWrapper, SearchStyle } from "./HeaderStyled";
import SearchIcon from "../Icons/SearchIcon";
import Logo from "../Icons/Logo";
import { useNavigate } from "react-router";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { ChangeEvent } from "react";

const Header = () => {
  const navigate = useNavigate();
  let { searchValue, updateSearch, setFilters } = useEmployeeContext();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearch(e.target.value);
  };
  return (
    <HeaderWrapper>
      <HeaderStyle>
        <h1>
          <a
            onClick={() => {
              setFilters([]);
              navigate("/");
            }}
          >
            <Logo />
          </a>
        </h1>
        {location.pathname.split("/")[1] == "" ||
          (location.pathname.split("/")[1] == "HRM-App-React" && (
            <SearchStyle>
              <input
                type="text"
                placeholder="Search By First Name"
                name="search"
                id="search"
                formNoValidate
                autoComplete="off"
                value={searchValue}
                onChange={handleSearch}
              />
              <SearchIcon className="search-icon" />
            </SearchStyle>
          ))}
      </HeaderStyle>
    </HeaderWrapper>
  );
};
export default Header;
