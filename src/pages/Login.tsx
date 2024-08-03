import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../Service/firebase/firebaseConfig";
import { FaGoogle } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const schemaForm = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

type FormData = z.infer<typeof schemaForm>;

const Login = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, , googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schemaForm),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await signInWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[50vh] md:h-[80vh]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-customGray4"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="mt-1 block w-full px-3 py-2 border border-customGray rounded-md sm:text-sm"
            />
            {errors.email && (
              <p className="text-customRed text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-customGray4"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="mt-1 block w-full px-3 py-2 border border-customGray rounded-md sm:text-sm"
            />
            {errors.password && (
              <p className="text-customRed text-sm">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-customGold font-semibold rounded-md border border-customGold"
            disabled={loading || googleLoading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
          {error && (
            <p className="text-customRed text-sm mt-4">
              {"An error occurred. Please try again."}
            </p>
          )}
        </form>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold py-2 text-center">Or</h2>
          <div className="flex">
            <button
              onClick={() => signInWithGoogle()}
              className="p-2 text-white bg-red-600 rounded-lg flex flex-row items-center text-lg gap-3 font-semibold"
            >
              <FaGoogle className="size-7" />
              Login with Gmail
            </button>
          </div>
          {googleError && (
            <p className="text-customRed text-sm mt-4">
              {"An error occurred. Please try again."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
