import BottomBar from "../components/bottonBar/BottonBar";
import FormCheckout from "../components/checkout/FormCheckout";
import TopBar from "../components/header/topBar/TopBar";
import { useNotAuthRedirect } from "../Service/firebase/Firebasehooks";

const Checkout = () => {
  useNotAuthRedirect("/login");
  return (
    <div>
      <TopBar />
      <FormCheckout />
      <BottomBar />
    </div>
  );
};

export default Checkout;
