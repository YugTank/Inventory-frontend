import { useEffect, useState } from "react";
import api from "../api";

export default function Categories() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    api.get("/categories").then(res => setCats(res.data));
  }, []);

  return (
    <div className="box">
      <h2>Categories</h2>

      {cats.map(c => (
        <div key={c.id} className="item">
          {c.name}
        </div>
      ))}
    </div>
  );
}