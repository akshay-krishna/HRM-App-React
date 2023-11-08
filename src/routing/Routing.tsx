import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import AddEdit from "../pages/AddEdit/AddEdit";

const Routing = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/employee-detail/", element: <ViewDetails /> },
  { path: "/add_edit_page", element: <AddEdit /> },
]);
export default Routing;
