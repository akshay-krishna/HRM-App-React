import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import EmployeeProvider from "../context/EmployeeContext";

const Layout = () => {
  return (
    <>
      <EmployeeProvider>
        <Header />
        <main>{<Outlet />}</main>
      </EmployeeProvider>
    </>
  );
};

export default Layout;
