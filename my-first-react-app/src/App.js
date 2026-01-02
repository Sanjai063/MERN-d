
import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';
function App(){
  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link>|
        <Link to="/about">About</Link>|
        <Link to="/contact">Contact</Link>|
        <Link to="/user/1">User1</Link>|
        <Link to="/user/2">User2</Link>|
      </nav>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
    
    </Router>

  );
}

export default App;
