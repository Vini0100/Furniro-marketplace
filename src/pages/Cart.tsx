import { useSelector } from "react-redux";
import BottomBar from "../components/bottonBar/BottonBar";
import CartPage from "../components/cart/cartPage/CartPage";
import TopBar from "../components/header/topBar/TopBar";
import { RootState } from "../redux/store";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.products);

  return (
    <div>
      <TopBar />
      <CartPage cart={cart} />
      <BottomBar />
    </div>
  );
};

export default Cart;
