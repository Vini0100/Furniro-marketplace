import { Link } from "react-router-dom";
import userIcon from "../../assets/images/icons/user.svg";
import cart from "../../assets/images/icons/cart.svg";
import logotype from "../../assets/images/logotype.svg";
import Logout from "../global/handleLogout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Service/firebase/firebaseConfig";
import { useState } from "react";
import Sidebar from "../cart/sidebar/Sidebar";

const Header = () => {
  const [user] = useAuthState(auth);
  const [sidebar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sidebar);

  return (
    <header className="relative bg-white font-poppins">
      <div className=" flex items-center justify-between mx-auto max-w-screen-xl flex-col md:flex-row gap-3 md:gap-0 px-1 py-7">
        <div className="flex gap-1 items-center">
          <img src={logotype} alt="Logotype" className="w-[50px] h-8" />
          <h1 className="font-bold font-montserrat text-[34px]">Furniro</h1>
        </div>
        <nav>
          <ul className="flex gap-12 md:gap-[4.68rem] font-medium text-base">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-9">
          {user && <Logout />}
          {!user && (
            <Link to="/login">
              <img src={userIcon} alt="User" />
            </Link>
          )}
          <div>
            <img
              src={cart}
              alt="Cart"
              onClick={showSideBar}
              className="cursor-pointer"
            />
            {sidebar && <Sidebar active={setSideBar} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
