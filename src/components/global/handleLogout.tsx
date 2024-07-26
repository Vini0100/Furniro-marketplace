import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Service/firebase/firebaseConfig";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-2 text-black font-semibold rounded-md border border-customGray2"
    >
      Logout
    </button>
  );
};

export default Logout;
