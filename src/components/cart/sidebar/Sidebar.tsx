import bagClose from "../../../assets/images/icons/bagClose.svg";

import ButtonCart from "./ButtonCart";
import ItemCart from "./ItemCart";

type SlidebarProps = {
  active: (value: boolean) => void;
};

const Sidebar = ({ active }: SlidebarProps) => {
  const closeSidebar = () => {
    active(false);
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      active(false);
    }
  });

  return (
    <div className="absolute top-0 right-0 w-[26.063rem] bg-white font-poppins">
      <div className="p-7 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <img
            src={bagClose}
            alt="Close Cart"
            onClick={closeSidebar}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col min-h-[31.25rem] pt-10 justify-between border-t border-customGray9 gap-6">
          <ul className="flex flex-col gap-5">
            <li>
              <ItemCart />
            </li>
            <li>
              <ItemCart />
            </li>
          </ul>
          <div className="flex text-base gap-10 md:gap-24">
            <h2 className="font-normal text-base">Subtotal</h2>
            <span className="font-semibold text-customGold">
              Rp. 520,000.00
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-customGray9 p-7">
        <ButtonCart>Cart</ButtonCart>
        <ButtonCart>Checkout</ButtonCart>
        <ButtonCart>Comparison</ButtonCart>
      </div>
    </div>
  );
};

export default Sidebar;
