import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/sidebar/Sidebar";
import Header from "../components/layout/header/Header";
import "./MainLayout.css"

const MainLayout = () => {
  return (
    <div className="sidebar">
      <Sidebar />

      <div className="header">
        <Header />

        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;