import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import { nestedRoutes } from "./routes/nestedRoutes";
import { publicRoutes } from "./routes/publicRoutes";


function App() {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }, index) => (
        <Route key={index} path={path} element={<Component />} />))}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          {nestedRoutes.map(({ path, name, Component }, index) => (
            <Route key={index} path={path} index={name === 'ManageUsers'} element={<Component />} />))}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
