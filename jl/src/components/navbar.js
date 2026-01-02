import { Link } from "react-router-dom";


export default function Navbar() {
const isLoggedIn = localStorage.getItem("loggedIn") === "true";


const logout = () => {
localStorage.clear();
window.location.href = "/login";
};


return (
<nav>
<h3>📘 Student Manager</h3>
<Link to="/about">About</Link>
{isLoggedIn && (
<>
<Link to="/dashboard">Dashboard</Link>
<Link to="/tasks">Tasks</Link>
<Link to="/events">Events</Link>
<button onClick={logout}>Logout</button>
</>
)}
{!isLoggedIn && <Link to="/login">Login</Link>}
</nav>
);
}