import Logo from "./logo";
import "./navbar.css";

// import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Logo/>
          </div>
          <div className="links">
            <a href="/home">Home</a>
            <a href="hire-a-designer">Hire a Designer</a>
            <a href="/resources">Resources</a>
          </div>
          <div>
            <input type="search" className="search"  placeholder="Search..."/>
          </div>
          <div className="account">
            <a href="/login" className="login">
              Login
            </a>
            <a href="/signup" className="sign-up" >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
