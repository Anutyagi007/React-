import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import CartSlice from "../utils/CartSlice";
import store from "../utils/store";

const LoggedInUser = () => {
  return false;
};
const Header = () => {
  const [isLogged, setIsLogged] = useState(LoggedInUser);
  const {user}=useContext(UserContext);
  const cartItems=useSelector((store)=>store.cart.items)
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg" >
      <div className="logo-container">
        <img className="h-20 p-2 mt-3" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-2">
            <Link to="/shopping">Shopping</Link>
          </li>
          <li>cart-{cartItems.length} items</li>
        </ul>
      </div>
      {user.name}
      <div className="py-8">
        {isLogged ? (
          <button onClick={() => setIsLogged(false)} className="bg-pink-300 h-10 rounded-lg mr-5 text-white w-16">Logout</button>
        ) : (
          <button onClick={() => setIsLogged(true)} className="bg-pink-300 h-10 rounded-lg mr-5 text-white w-16">Login</button>
        )}
      </div>
    </div>
  );
};
export default Header;
