import { LOGO_URL } from "../Utils/Constans";

const Header = () => {
    return (
      <div className="heading">
        <div className="logo-conatiner">
          <img
            src={LOGO_URL}
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;