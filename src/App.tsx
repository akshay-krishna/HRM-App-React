import "./App.css";
import Layout from "./layout/Layout";
import Routing from "./routing/Routing";
// import AddEdit from "./pages/AddEdit/AddEdit";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import ViewDetails from "./pages/ViewDetails/ViewDetails";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Layout>
      <RouterProvider router={Routing}></RouterProvider>
    </Layout>
  );
}

export default App;