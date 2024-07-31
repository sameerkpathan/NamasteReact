import { useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [Loginbtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100   shadow-lg ">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="w-36" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center  ">
        <ul className="flex  p-4 m-2 ">
          {/* to write like below emoji you can type press contol + p ==> then type >Emoji:insert Emoji  ==> then search emoji you want  */}
          <li className="px-4">Online Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className=" px-4 ">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>

          <li className="px-4 cursor-pointer">Cart</li>
          <button
            className="px-4"
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
