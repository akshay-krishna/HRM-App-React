import "./App.css";
import routing from "./routing/routing";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  console.log("app");
  return (
    <>
      <RouterProvider router={routing}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
