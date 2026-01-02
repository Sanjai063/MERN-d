import { useState } from "react";


export default function Login() {
const [name, setName] = useState("");


const login = () => {
if (!name) return alert("Enter your name");
localStorage.setItem("loggedIn", "true");
localStorage.setItem("username", name);
window.location.href = "/dashboard";
};


return (
<div className="card center">
<h2>Login</h2>
<input placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
<button onClick={login}>Login</button>
</div>
);
}