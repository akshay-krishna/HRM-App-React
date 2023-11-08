import "./App.css";
import Routing from "./routing/Routing";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={Routing}></RouterProvider>;
}

export default App;
