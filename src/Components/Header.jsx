import { useState } from "react";
import { LOGO_URL } from "../Utils/Constans";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="heading">
      <div className="logo-conatiner">
        <img src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
