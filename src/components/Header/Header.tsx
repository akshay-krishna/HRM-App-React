import { HeaderWrapper } from "./HeaderStyled";
import SearchIcon from "../Icons/SearchIcon";
import Logo from "../Icons/Logo";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header">
        <h1>
          <a href="/">
            <Logo />
          </a>
        </h1>
        <div className="search-parent">
          <input
            type="text"
            placeholder="Search By First Name"
            name="search"
            id="search"
            formNoValidate
            autoComplete="off"
          />
          <SearchIcon className="search-icon" />
        </div>
      </div>
    </HeaderWrapper>
  );
};
export default Header;
