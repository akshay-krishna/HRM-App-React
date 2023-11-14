import { HeaderStyle, HeaderWrapper, SearchStyle } from "./HeaderStyled";
import SearchIcon from "../Icons/SearchIcon";
import Logo from "../Icons/Logo";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <HeaderWrapper>
      <HeaderStyle>
        <h1>
          <a onClick={() => navigate("/")}>
            <Logo />
          </a>
        </h1>
        {location.pathname.split("/")[1] == "" && (
          <SearchStyle>
            <input
              type="text"
              placeholder="Search By First Name"
              name="search"
              id="search"
              formNoValidate
              autoComplete="off"
            />
            <SearchIcon className="search-icon" />
          </SearchStyle>
        )}
      </HeaderStyle>
    </HeaderWrapper>
  );
};
export default Header;
