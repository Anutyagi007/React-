import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const LoggedInUser=()=>{
  return false;
}
const Header = () => {
  const[isLogged,setIsLogged]=useState(LoggedInUser);
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li> 
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/shopping">Shopping</Link></li>
            <li>cart</li>
          </ul>
        </div>
        <div>
          {isLogged? (
          <button onClick={()=>setIsLogged(false)}>Logout</button>
          ): (
          <button onClick={()=>setIsLogged(true)}>Login</button>
          )}
          
          
        </div>
      </div>
    );
  };
  export default Header;