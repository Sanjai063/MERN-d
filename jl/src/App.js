import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Events from "./pages/Events";
import About from "./pages/About";
import './App.css'

function App() {
const isLoggedIn = localStorage.getItem("loggedIn") === "true";


return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
<Route path="/tasks" element={isLoggedIn ? <Tasks /> : <Navigate to="/login" />} />
<Route path="/events" element={isLoggedIn ? <Events /> : <Navigate to="/login" />} />
<Route path="/about" element={<About />} />
<Route path="*" element={<Navigate to="/login" />} />
</Routes>
</BrowserRouter>
);
}


export default App;