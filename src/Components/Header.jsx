import { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/Constans";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus()
  const {loggedInUser} = useContext(UserContext)
  console.log(loggedInUser);

  return (
    <div className="flex justify-between shadow-xl sm:bg-gray-100 lg:bg-green-50">
      <div className="logo-conatiner">
        <img src={LOGO_URL} alt="" className="w-48" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status {onlineStatus ? "🟢" :"🔴"}</li>
          <li className="px-4"><Link to={'/'} >Home</Link></li>
          <li className="px-4"><Link to='/about'>About us</Link></li>
          <li className="px-4"><Link to='contact'>Contact us</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
          <button
            className="btn-login"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
