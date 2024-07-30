import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CheckoutBtn from "../cart/cartPage/CheckoutBtn";
import TotalCheckout from "./TotalCheckout";
import { fetchViacep } from "../../Service/apiService/apiService";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { resetProductFromCart } from "../../redux/features/cart/cartSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Service/firebase/firebaseConfig";
import { useEffect, useState } from "react";

const addressSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().optional(),
  zipCode: z.string().length(8, "ZIP code must be 8 characters"),
  countryRegion: z.string().min(1, "Country/Region is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  townCity: z.string().min(1, "Town/City is required"),
  province: z.string().min(1, "Province is required"),
  addonAddress: z.string().optional(),
  emailAddress: z.string().email("Invalid email address"),
  additionalInfo: z.string().optional(),
});

type Address = z.infer<typeof addressSchema>;

const FormCheckout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (user?.displayName) {
      const fullName = user?.displayName;
      const nameParts = fullName.trim().split(" ");
      if (fullName.length >= 1) {
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(" ");
        setName(firstName);
        setLastName(lastName);
      } else {
        setName(nameParts[0]);
      }
    }
    if (user?.email) {
      setEmail(user?.email);
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Address>({
    resolver: zodResolver(addressSchema),
  });

  const handleZipCodeChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const zipCode = e.target.value;
    setValue("zipCode", zipCode);

    if (zipCode.length === 8) {
      await fetchViacep({
        setAddress: (newAddress: Partial<Address>) => {
          Object.keys(newAddress).forEach((key) => {
            setValue(key as keyof Address, newAddress[key as keyof Address]);
          });
        },
        zipCode,
      });
    }
  };

  const onSubmit = () => {
    dispatch(resetProductFromCart());
    navigate("/");
  };

  return (
    <div className="max-w-[1240px] mx-auto font-poppins md:py-12">
      <form
        className="flex flex-col md:flex-row font-poppins justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="gap-9 flex flex-col p-[4.75rem]">
          <h2 className="font-semibold text-4xl">Billing details</h2>
          <div className="flex flex-col gap-9">
            <div className="flex gap-8 flex-col md:flex-row">
              <div className="flex flex-col gap-[1.375rem]">
                <label htmlFor="firstName" className="font-medium text-base">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border border-customGray rounded-md py-4 px-7 outline-none"
                  {...register("firstName")}
                  value={name}
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-[1.375rem]">
                <label htmlFor="lastName" className="font-medium text-base">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border border-customGray rounded-md py-4 px-7 outline-none"
                  {...register("lastName")}
                  value={lastName}
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[1.375rem]">
              <label htmlFor="companyName" className="font-medium text-base">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="companyName"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("companyName")}
              />
              {errors.companyName && (
                <p className="text-red-500">{errors.companyName.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[1.375rem]">
              <label htmlFor="zipCode" className="font-medium text-base">
                ZIP code
              </label>
              <input
                type="text"
                id="zipCode"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("zipCode")}
                onChange={handleZipCodeChange}
              />
              {errors.zipCode && (
                <p className="text-red-500">{errors.zipCode.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[1.375rem]">
              <label htmlFor="countryRegion" className="font-medium text-base">
                Country / Region
              </label>
              <input
                type="text"
                id="countryRegion"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("countryRegion")}
              />
              {errors.countryRegion && (
                <p className="text-red-500">{errors.countryRegion.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[1.375rem]">
              <label htmlFor="streetAddress" className="font-medium text-base">
                Street address
              </label>
              <input
                type="text"
                id="streetAddress"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("streetAddress")}
              />
              {errors.streetAddress && (
                <p className="text-red-500">{errors.streetAddress.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[1.375rem]">
              <label htmlFor="townCity" className="font-medium text-base">
                Town / City
              </label>
              <input
                type="text"
                id="townCity"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("townCity")}
              />
              {errors.townCity && (
                <p className="text-red-500">{errors.townCity.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[1.375rem]">
              <label htmlFor="province" className="font-medium text-base">
                Province
              </label>
              <input
                type="text"
                id="province"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("province")}
              />
              {errors.province && (
                <p className="text-red-500">{errors.province.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[1.375rem]">
              <label htmlFor="addonAddress" className="font-medium text-base">
                Add-on address
              </label>
              <input
                type="text"
                id="addonAddress"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("addonAddress")}
              />
              {errors.addonAddress && (
                <p className="text-red-500">{errors.addonAddress.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[1.375rem]">
              <label htmlFor="emailAddress" className="font-medium text-base">
                Email address
              </label>
              <input
                type="email"
                id="emailAddress"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("emailAddress")}
                value={email}
              />
              {errors.emailAddress && (
                <p className="text-red-500">{errors.emailAddress.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-[1.375rem]">
              <input
                type="text"
                placeholder="Additional information"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                id="additionalInfo"
                {...register("additionalInfo")}
              />
              {errors.additionalInfo && (
                <p className="text-red-500">{errors.additionalInfo.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="px-9 py-9 md:py-20 items-center flex flex-col gap-10">
          <TotalCheckout />
          <p className="font-light text-base text-customGray pt-10 border-t border-customGray">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <div className="flex flex-col self-start w-full">
            <fieldset className="flex flex-col gap-2">
              <label
                htmlFor="paymentBank"
                className="flex items-center text-base"
              >
                <input
                  type="radio"
                  id="paymentBank"
                  name="paymentMethod"
                  value="bank"
                  className="mr-4"
                />
                Direct Bank Transfer
              </label>
              <label
                htmlFor="paymentCash"
                className="flex items-center text-base mt-2"
              >
                <input
                  type="radio"
                  id="paymentCash"
                  name="paymentMethod"
                  value="cash"
                  className="mr-4"
                />
                Cash On Delivery
              </label>
            </fieldset>
          </div>
          <p className="font-base text-base">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-bold cursor-pointer">privacy policy.</span>
          </p>
          <CheckoutBtn>Place order</CheckoutBtn>
        </div>
      </form>
    </div>
  );
};

export default FormCheckout;
