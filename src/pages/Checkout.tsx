import { useEffect } from "react";
import BottomBar from "../components/bottonBar/BottonBar";
import FormCheckout from "../components/checkout/FormCheckout";
import TopBar from "../components/header/topBar/TopBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Service/firebase/firebaseConfig";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <TopBar />
      <FormCheckout />
      <BottomBar />
    </div>
  );
};

export default Checkout;
