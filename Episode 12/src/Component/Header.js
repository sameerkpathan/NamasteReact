import { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [Loginbtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //we can subscribing the store using selector

  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  return (
    <div className="flex justify-between bg-gray-100   shadow-lg ">
      <div className="logo-container ">
        <Link to={"/"}>
          <img className="w-36 rounded-full p-1" src={LOGO_URL} />
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

          <Link to={"/cart"}>
            <li className="px-4 cursor-pointer font-bold">
              🛒({cartItem.length} Item)
            </li>
          </Link>
          
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
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
