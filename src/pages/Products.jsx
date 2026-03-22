import { useEffect, useState } from "react";
import api from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (!search) {
      const res = await api.get("/products");
      setProducts(res.data);
      return;
    }

    const res = await api.get(`/products/search?name=${search}`);
    setProducts(res.data)};

    const deleteProduct = async (id) => {
      try {
        await api.delete(`/products/${id}`);
        setProducts(products.filter(p => p.id !== id));
      } catch (err) {
        console.log(err);
        alert("Delete failed");
      }
    };

  return (
    <div className="box" style={{ width: "500px" }}>
      <h2>Products</h2>
      <input placeholder="Search product" value={search} onChange={(e) => setSearch(e.target.value)}/>

      <button onClick={handleSearch}>Search</button>
      {products.map(p => (
        <div key={p.id} className="item">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <strong>{p.name}</strong>
          <p>Qty: {p.quantity}</p>
        </div>

            <div>
              ₹{p.price}
              <br />
              <button onClick={() => deleteProduct(p.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}