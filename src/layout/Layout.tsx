import { ReactNode } from "react";
import Header from "../components/Header/Header";


const Layout = ({children}:{children:ReactNode}) => {
 
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
