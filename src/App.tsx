import "./App.css";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ViewDetails from "./pages/ViewDetails/ViewDetails";

function App() {
  return (
    <Layout>
      <Dashboard />
      <ViewDetails />
    </Layout>
  );
}

export default App;
