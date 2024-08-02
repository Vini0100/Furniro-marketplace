import { useSelector } from "react-redux";
import ItemCart from "./ItemCart";
import { RootState } from "../../../redux/store";
import { ProductWithQuantity } from "../../../types/product";
import { useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Service/firebase/firebaseConfig";
import CheckoutBtn from "./CheckoutBtn";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart.products);

  const subtotal = useMemo(() => {
    return cart.reduce((acc, product: ProductWithQuantity) => {
      const price =
        product.salePrice > 0 ? product.salePrice : product.normalPrice;
      return acc + price * (product.quantity || 1);
    }, 0);
  }, [cart]);

  return (
    <section className="mx-auto max-w-[1240px] py-1 md:py-[4.5rem] flex flex-col md:flex-row gap-[1.875rem] justify-between font-poppins">
      <div className="flex flex-col w-full">
        <ul
          className="md:flex py-4 bg-customBeige2 justify-between px-[9.7rem] font-medium text-base hidden"
          data-testid="listHeader"
        >
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
        </ul>
        <ul className="flex flex-col gap-6 py-10 h-[31.25rem] overflow-y-auto">
          {cart.map((product: ProductWithQuantity) => (
            <ItemCart key={product.sku} product={product} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-10 items-center bg-customBeige2 pt-4 pb-24 px-[4.688rem] h-fit">
        <h2 className="font-semibold text-[2rem] pb-5 whitespace-nowrap">
          Cart Totals
        </h2>
        <ul className="flex flex-col gap-7 font-medium text-base">
          <li className="flex gap-4 items-center">
            <span className="w-20 whitespace-nowrap">Subtotal</span>
            <span className="font-normal text-base text-customGray whitespace-nowrap">
              Rp. {subtotal.toFixed(2)}
            </span>
          </li>
          <li className="flex gap-4 items-center">
            <span className="w-20 whitespace-nowrap">Total</span>
            <span className="font-medium text-xl text-customGold whitespace-nowrap">
              Rp. {subtotal.toFixed(2)}
            </span>
          </li>
        </ul>
        {user ? (
          subtotal <= 0 ? (
            <CheckoutBtn disabled={true}>Check Out</CheckoutBtn>
          ) : (
            <CheckoutBtn onClick={() => navigate("/checkout")}>
              Check Out
            </CheckoutBtn>
          )
        ) : (
          <CheckoutBtn onClick={() => navigate("/login")}>Login</CheckoutBtn>
        )}
      </div>
    </section>
  );
};

export default CartPage;
