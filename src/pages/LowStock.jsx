import { useEffect, useState } from "react";
import api from "../api";

export default function LowStock() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products/low-stock")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="box">
      <h2>Low Stock</h2>

      {products.map(p => (
        <div key={p.id} className="item">
          <b>{p.name}</b> - Qty: {p.quantity}
        </div>
      ))}
    </div>
  );
}