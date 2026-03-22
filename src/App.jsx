import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Categories from "./pages/Categories";
import LowStock from "./pages/LowStock";
import StockUpdate from "./pages/StockUpdate";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      {token && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={token ? <Products /> : <Navigate to="/login" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/low" element={<LowStock />} />
        <Route path="/stock" element={<StockUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;