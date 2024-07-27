import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const SubTotal = () => {
  const cart = useSelector((state: RootState) => state.cart.products);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, product) => {
      const price =
        product.salePrice > 0 ? product.salePrice : product.normalPrice;
      return acc + price * (product.quantity || 1);
    }, 0);

    setSubtotal(total);
  }, [cart]);

  return (
    <div className="flex text-base gap-10 md:gap-24 font-poppins">
      <h2 className="font-normal text-base">Subtotal</h2>
      <span className="font-semibold text-customGold">
        Rp. {subtotal.toFixed(2)}
      </span>
    </div>
  );
};

export default SubTotal;
