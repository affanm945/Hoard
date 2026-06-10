import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="side">
      <h2>Admin Panel</h2>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/Inventory" style={{ color: "white" }}>
              Inventory
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;