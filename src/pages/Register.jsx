import { useState } from "react";
import api from "../api";

export default function Register() {
  const [form, setForm] = useState({ username:"", password:"", email:"", role:"USER" });

  const handleRegister = async () => {
    try {
      await api.post("/users/register", form);
      alert("Registered");
    } catch {
      alert("Failed");
    }
  };

  return (
    <div className="box">
      <h2>Register</h2>
      <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})}/>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}