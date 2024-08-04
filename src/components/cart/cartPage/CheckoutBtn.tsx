import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";

type PropsButton = {
  children: string;
  link?: string;
};

const CheckoutBtn = ({ children, link }: PropsButton) => {
  const cart = useSelector((state: RootState) => state.cart.products);
  const isCartEmpty = cart.length === 0;
  const navigate = useNavigate();

  const handleClick = () => {
    if (link && !isCartEmpty) {
      navigate(link);
    }
  };

  return (
    <button
      type="button"
      disabled={isCartEmpty}
      onClick={handleClick}
      className={`text-nowrap border rounded-xl border-black px-[3.75rem] py-[0.875rem] font-poppins ${
        isCartEmpty
          ? "bg-customRed border-none text-white cursor-not-allowed"
          : ""
      }`}
    >
      {children}
    </button>
  );
};

export default CheckoutBtn;
