import { useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageBuses from "./pages/ManageBuses";
import ManageRoute from "./pages/ManageRoute";
import ManageDrivers from "./pages/ManageDrivers";
import ManageStudents from "./pages/ManageStudents";
import NotificationPage from "./pages/NotificationPage";
import ComplaintsPage from "./pages/ComplaintsPage";
import { Dashboard } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Dashboard />}></Route>
        <Route path="manageBuses" element={<ManageBuses />}></Route>
        <Route path="manageRoutes" element={<ManageRoute />}></Route>
        <Route path="manageDrivers" element={<ManageDrivers />}></Route>
        <Route path="manageStudents" element={<ManageStudents />}></Route>
        <Route
          path="manageNotifications"
          element={<NotificationPage />}
        ></Route>
        <Route path="manageComplaints" element={<ComplaintsPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
