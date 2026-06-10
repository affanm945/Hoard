import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardPage from "../pages/DashboardPage";
import Inventory from "../pages/Inventory/Inventory";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/Inventory" element={<Inventory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;