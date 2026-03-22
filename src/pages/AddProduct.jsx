import { useState } from "react";
import api from "../api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

export default function AddProduct() {
  const [form, setForm] = useState({ name:"", sku:"", price:"", quantity:"", categoryId:"" });

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/categories").then(res => setCategories(res.data));
  }, []);

  const handleSubmit = async () => {
  if (!form.name || !form.price || !form.categoryId) {
    alert("Please fill all required fields");
    return;
  }

  try {
    await api.post("/products", {
      name: form.name,
      sku: form.sku,
      price: Number(form.price),
      quantity: Number(form.quantity || 0),
      categoryId: Number(form.categoryId)
    });

    alert("Product added");
    navigate("/products");

  } catch (err) {
    console.log(err.response?.data);
    alert("Error adding product");
  }
};

  return (
    <div className="box">
      <h2>Add Product</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})}/>
      <input placeholder="SKU" onChange={e => setForm({...form, sku: e.target.value})}/>
      <input placeholder="Price" onChange={e => setForm({...form, price: e.target.value})}/>
      <input placeholder="Quantity" onChange={e => setForm({...form, quantity: e.target.value})}/>
      <select
      value={form.categoryId}
      onChange={(e) =>
        setForm({ ...form, categoryId: e.target.value })
      }>
      <option value="">Select Category</option>

      {categories.map((c) => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
    </select>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}