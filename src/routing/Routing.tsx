import { createBrowserRouter } from "react-router-dom";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import ViewDetails from "../pages/ViewDetails/ViewDetails";
// import AddEdit from "../pages/AddEdit/AddEdit";
import React from "react";
const LazyDashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const LazyViewDetails = React.lazy(
  () => import("../pages/ViewDetails/ViewDetails")
);
const LazyAddEdit = React.lazy(() => import("../pages/AddEdit/AddEdit"));

const Routing = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <React.Suspense>
          <LazyDashboard />
        </React.Suspense>{" "}
      </>
    ),
  },

  {
    path: "/employee-detail/",
    element: (
      <>
        <React.Suspense>
          <LazyViewDetails />
        </React.Suspense>{" "}
      </>
    ),
  },
  {
    path: "/add_edit_page",
    element: (
      <>
        <React.Suspense>
          <LazyAddEdit />
        </React.Suspense>{" "}
      </>
    ),
  },
]);
export default Routing;
