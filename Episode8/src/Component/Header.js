import { useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [Loginbtn, setLoginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <Link to={"/"}><img className="logo" src={LOGO_URL} /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              Loginbtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {Loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
