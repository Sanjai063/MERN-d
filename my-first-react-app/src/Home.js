import { useNavigate } from "react-router-dom";
function Home(){
    const navigate=useNavigate();
    return(
        <div>
            <h1>Home Page</h1>
            <p> Welcome to the page</p>
            <button onClick={() => navigate("/about")}>Go to about</button>
        </div>
    );
}
export default Home;