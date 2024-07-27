import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";

const useAuthRedirect = (redirectPath: string) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  if (user) {
    navigate(redirectPath);
  }
};

const useNotAuthRedirect = (redirectPath: string) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  if (!user) {
    navigate(redirectPath);
  }
};

export { useAuthRedirect, useNotAuthRedirect };
