import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
const LazyDashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const LazyViewDetails = React.lazy(
  () => import("../pages/ViewDetails/ViewDetails")
);
const LazyAddEdit = React.lazy(() => import("../pages/AddEdit/AddEdit"));

const routing = createBrowserRouter(
  [
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <React.Suspense fallback={<LoaderComponent />}>
              <LazyDashboard />
            </React.Suspense>
          ),
        },
        {
          path: "/employee-details/:id",
          element: (
            <React.Suspense fallback={<LoaderComponent />}>
              <LazyViewDetails />
            </React.Suspense>
          ),
        },
        {
          path: "/add-page/",
          element: (
            <React.Suspense fallback={<LoaderComponent />}>
              <LazyAddEdit />
            </React.Suspense>
          ),
        },
        {
          path: "/edit-page/:id",
          element: (
            <React.Suspense fallback={<LoaderComponent />}>
              <LazyAddEdit />
            </React.Suspense>
          ),
        },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/HRM-App-React/" }
);
export default routing;
