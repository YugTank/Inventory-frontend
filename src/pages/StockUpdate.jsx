import { useEffect, useState } from "react";
import api from "../api";

export default function StockUpdate() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    productId: "",
    quantity: "",
    operation: "ADD"
  });

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  const handleSubmit = async () => {
    await api.post("/inventory/update", {
      productId: Number(form.productId),
      quantity: Number(form.quantity),
      operation: form.operation
    });

    alert("Updated");
  };

  return (
    <div className="box">
      <h2>Update Stock</h2>

      <select onChange={e => setForm({...form, productId: e.target.value})}>
        <option>Select Product</option>
        {products.map(p => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>

      <input
        placeholder="Quantity"
        onChange={e => setForm({...form, quantity: e.target.value})}
      />

      <select onChange={e => setForm({...form, operation: e.target.value})}>
        <option>ADD</option>
        <option>REMOVE</option>
        <option>ADJUST</option>
      </select>

      <button onClick={handleSubmit}>Update</button>
    </div>
  );
}