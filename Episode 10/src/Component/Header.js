import { useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [Loginbtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-200  m-2 shadow-lg ">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="w-36" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex  p-4 m-2 ">
          {/* to write like below emoji you can type press contol + p ==> then type >Emoji:insert Emoji  ==> then search emoji you want  */}
          <li className="">Online Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="  ">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>

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
