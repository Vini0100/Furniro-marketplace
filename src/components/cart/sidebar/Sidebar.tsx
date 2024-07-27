import { useNavigate } from "react-router-dom";
import ButtonCart from "./ButtonCart";
import ItemsCart from "./ItemsCart";
import SubTotal from "./SubTotal";

type SlidebarProps = {
  active: (value: boolean) => void;
};

const Sidebar = ({ active }: SlidebarProps) => {
  const navigate = useNavigate();
  const closeSidebar = () => {
    active(false);
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      active(false);
    }
  });

  return (
    <div className="absolute z-50 top-0 right-0 w-[26.063rem] bg-white font-poppins">
      <div className="p-7 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <img
            src="https://challenge-week-12-compass.s3.amazonaws.com/images/icons/bagClose.svg"
            alt="Close Cart"
            onClick={closeSidebar}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col min-h-[31.25rem] pt-10 justify-between border-t border-customGray9 gap-6">
          <ItemsCart />
          <SubTotal />
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-customGray9 p-7">
        <ButtonCart onClick={() => navigate("/cart")}>Cart</ButtonCart>
        <ButtonCart onClick={() => navigate("/checkout")}>Checkout</ButtonCart>
        <ButtonCart>Comparison</ButtonCart>
      </div>
    </div>
  );
};

export default Sidebar;
