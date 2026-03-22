import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav-left">
        <h3>InventoryPro</h3>
      </div>

      <div className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/add">Add</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/low">Low Stock</Link>
      </div>

      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}