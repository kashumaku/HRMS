import Dashboard from "./pages/admin/dashboard";
import EmpDetail from "./pages/admin/employee_detail";
import Employees from "./pages/admin/employees";
import Home from "./pages/admin/home";
import Leave from "./pages/admin/leave";
import Profile from "./pages/admin/profile";
import Login from "./pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="bg-gray-200">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="/admin/dashboard/employees" element={<Employees />} />
            <Route
              path="/admin/dashboard/employee/:id"
              element={<EmpDetail />}
            />
            <Route path="/admin/dashboard/leave" element={<Leave />} />
            <Route path="/admin/dashboard/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
