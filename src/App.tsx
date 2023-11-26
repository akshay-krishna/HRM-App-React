import "./App.css";
import Routing from "./routing/Routing";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <RouterProvider router={Routing}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
