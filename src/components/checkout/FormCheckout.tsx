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
import { useEffect } from "react";

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
  paymentMethod: z.enum(["bank", "cash"], {
    errorMap: () => ({ message: "Payment method is required" }),
  }),
});

type Address = z.infer<typeof addressSchema>;

const FormCheckout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Address>({
    resolver: zodResolver(addressSchema),
  });

  useEffect(() => {
    if (user) {
      if (user.displayName) {
        const fullName = user.displayName;
        const nameParts = fullName.trim().split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(" ");
        setValue("firstName", firstName);
        setValue("lastName", lastName);
      }
      if (user.email) {
        setValue("emailAddress", user.email);
      }
    }
  }, [user, setValue]);

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
              <label
                htmlFor="firstName"
                className="font-medium text-base flex flex-col gap-[1.375rem]"
              >
                First Name
                <input
                  type="text"
                  id="firstName"
                  className="border border-customGray rounded-md py-4 px-7 outline-none"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-customRed">{errors.firstName.message}</p>
                )}
              </label>

              <label
                htmlFor="lastName"
                className="font-medium text-base flex flex-col gap-[1.375rem]"
              >
                Last Name
                <input
                  type="text"
                  id="lastName"
                  className="border border-customGray rounded-md py-4 px-7 outline-none"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-customRed">{errors.lastName.message}</p>
                )}
              </label>
            </div>
            <label
              htmlFor="companyName"
              className="font-medium text-base flex flex-col gap-[1.375rem]"
            >
              Company Name (Optional)
              <input
                type="text"
                id="companyName"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("companyName")}
              />
              {errors.companyName && (
                <p className="text-customRed">{errors.companyName.message}</p>
              )}
            </label>
            <label
              htmlFor="zipCode"
              className="font-medium text-base flex flex-col gap-[1.375rem]"
            >
              ZIP code
              <input
                type="text"
                id="zipCode"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("zipCode")}
                onChange={handleZipCodeChange}
              />
              {errors.zipCode && (
                <p className="text-customRed">{errors.zipCode.message}</p>
              )}
            </label>
            <label
              htmlFor="countryRegion"
              className="font-medium text-base flex flex-col gap-[1.375rem]"
            >
              Country / Region
              <input
                type="text"
                id="countryRegion"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("countryRegion")}
              />
              {errors.countryRegion && (
                <p className="text-customRed">{errors.countryRegion.message}</p>
              )}
            </label>
            <label
              htmlFor="streetAddress"
              className="font-medium text-base flex flex-col gap-[1.375rem]"
            >
              Street address
              <input
                type="text"
                id="streetAddress"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("streetAddress")}
              />
              {errors.streetAddress && (
                <p className="text-customRed">{errors.streetAddress.message}</p>
              )}
            </label>
            <label
              htmlFor="townCity"
              className="font-medium text-base flex flex-col gap-[1.375rem]"
            >
              Town / City
              <input
                type="text"
                id="townCity"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("townCity")}
              />
              {errors.townCity && (
                <p className="text-customRed">{errors.townCity.message}</p>
              )}
            </label>
            <label
              htmlFor="province"
              className="font-medium text-base flex flex-col gap-[1.375rem]"
            >
              Province
              <input
                type="text"
                id="province"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("province")}
              />
              {errors.province && (
                <p className="text-customRed">{errors.province.message}</p>
              )}
            </label>
            <label
              htmlFor="addonAddress"
              className="font-medium text-base flex flex-col gap-[1.375rem]"
            >
              Add-on address
              <input
                type="text"
                id="addonAddress"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("addonAddress")}
              />
              {errors.addonAddress && (
                <p className="text-customRed">{errors.addonAddress.message}</p>
              )}
            </label>
            <label
              htmlFor="emailAddress"
              className="font-medium text-base flex flex-col gap-[1.375rem]"
            >
              Email address
              <input
                type="email"
                id="emailAddress"
                className="border border-customGray rounded-md py-4 px-7 outline-none"
                {...register("emailAddress")}
              />
              {errors.emailAddress && (
                <p className="text-customRed">{errors.emailAddress.message}</p>
              )}
            </label>
            <input
              id="additionalInfo"
              placeholder="Additional information"
              className="border border-customGray rounded-md py-4 px-7 outline-none"
              {...register("additionalInfo")}
            />
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
                  value="bank"
                  {...register("paymentMethod", {
                    required: "Payment method is required",
                  })}
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
                  value="cash"
                  {...register("paymentMethod", {
                    required: "Payment method is required",
                  })}
                  className="mr-4"
                />
                Cash On Delivery
              </label>
              {errors.paymentMethod && (
                <p className="text-customRed">{errors.paymentMethod.message}</p>
              )}
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
