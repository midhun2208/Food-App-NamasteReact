import { useState } from "react";
import { LOGO_URL } from "../Utils/Constans";
import { Link } from "react-router-dom";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="heading">
      <div className="logo-conatiner">
        <img src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={'/'} >Home</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li><Link to='contact'>Contact us</Link></li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
