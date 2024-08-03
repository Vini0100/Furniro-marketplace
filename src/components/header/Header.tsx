import { Link } from "react-router-dom";
import Logout from "../global/Logout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Service/firebase/firebaseConfig";
import Sidebar from "../cart/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";

const Header = () => {
  const [user] = useAuthState(auth);
  const [sidebar, setSideBar] = useState(false);
  const cart = useSelector((state: RootState) => state.cart.products);
  const showSideBar = () => setSideBar(!sidebar);

  const quantity = cart.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue.quantity || 0);
  }, 0);

  return (
    <header className="relative bg-white font-poppins">
      <div className=" flex items-center justify-between mx-auto max-w-screen-xl flex-col md:flex-row gap-3 md:gap-0 px-1 py-7">
        <div className="flex gap-1 items-center">
          <img
            src={
              "https://challenge-week-12-compass.s3.amazonaws.com/images/logotype/logotype.svg"
            }
            alt="Logotype"
            className="w-[50px] h-8"
          />
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
              <Link to="/">About</Link>
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
              <img
                src="https://challenge-week-12-compass.s3.amazonaws.com/images/icons/user.svg"
                alt="User"
              />
            </Link>
          )}
          <div className="flex items-center">
            {quantity > 0 && (
              <div className="flex items-center bg-customGold rounded-full size-5 justify-center">
                <p className="text-sm font-semibold text-white">{quantity}</p>
              </div>
            )}
            <img
              src="https://challenge-week-12-compass.s3.amazonaws.com/images/icons/cart.svg"
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
