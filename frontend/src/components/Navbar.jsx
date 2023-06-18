import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (  
        <div className="navbar">
            <ul className="nav-items">
                <li className="nav-item"><Link className="nav-link" to='/'>Publish</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/messages'>Messages</Link></li>
            </ul>
            <Outlet />
        </div>
    );
}
 
export default Navbar;