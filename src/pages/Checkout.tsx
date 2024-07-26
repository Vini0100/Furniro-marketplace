import TopBar from "../components/topBar/TopBar";
import { useNotAuthRedirect } from "../Service/firebase/Firebasehooks";

const Checkout = () => {
  useNotAuthRedirect("/login");
  return (
    <div>
      <TopBar />
    </div>
  );
};

export default Checkout;
