import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Layout from "../layout/Layout";
const LazyDashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const LazyViewDetails = React.lazy(
  () => import("../pages/ViewDetails/ViewDetails")
);
const LazyAddEdit = React.lazy(() => import("../pages/AddEdit/AddEdit"));

const Routing = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense>
            <LazyDashboard />
          </React.Suspense>
        ),
      },
      {
        path: "/employee-details/:id",
        element: (
          <React.Suspense>
            <LazyViewDetails />
          </React.Suspense>
        ),
      },
      {
        path: "/add-page/",
        element: (
          <React.Suspense>
            <LazyAddEdit />
          </React.Suspense>
        ),
      },
      {
        path: "/edit-page/:id",
        element: (
          <React.Suspense>
            <LazyAddEdit />
          </React.Suspense>
        ),
      },
    ],
  },
]);
export default Routing;
