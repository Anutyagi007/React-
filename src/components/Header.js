import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

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
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
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