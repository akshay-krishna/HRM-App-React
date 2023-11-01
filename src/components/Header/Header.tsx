import { HeaderWrapper } from "./HeaderStyled";
import logo from "../../assets/images/LOGO.svg";
import searchIcon from "../../assets/images/seach-icon.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header">
        <h1>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </h1>
        <form className="search-form">
          <div className="search-parent">
            <input
              type="text"
              placeholder="Search By First Name"
              name="search"
              id="search"
              formNoValidate
              autoComplete="off"
            />
            <img className="search-icon" alt="search-icon" src={searchIcon} />
          </div>
        </form>
      </div>
    </HeaderWrapper>
  );
};
export default Header;
