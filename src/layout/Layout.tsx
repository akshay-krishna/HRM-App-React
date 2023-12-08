import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const Layout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <main>{<Outlet />}</main>
      </Provider>
    </>
  );
};

export default Layout;
