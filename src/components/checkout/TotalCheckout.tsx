import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { z } from "zod";

const productSchema = z.object({
  id: z.string(),
  title: z.string(),
  normalPrice: z.number().min(0),
  salePrice: z.number().min(0).optional(),
  quantity: z.number().int().nonnegative().optional(),
});

const cartSchema = z.array(productSchema);

const TotalCheckout = () => {
  const cart = useSelector((state: RootState) => state.cart.products);

  const parsedCart = cartSchema.safeParse(cart);

  if (!parsedCart.success) {
    console.error("Cart validation error:", parsedCart.error);
    return <div>There was an error with your cart.</div>;
  }

  const calculateTotals = () => {
    let subtotal = 0;
    parsedCart.data.forEach((product) => {
      const price =
        product.salePrice && product.salePrice > 0
          ? product.salePrice
          : product.normalPrice;
      subtotal += price * (product.quantity || 0);
    });
    const total = subtotal;
    return { subtotal, total };
  };

  const { subtotal, total } = calculateTotals();

  return (
    <ul className="flex flex-col gap-[1.375rem] w-full">
      <li className="flex justify-between">
        <h3 className="font-medium text-2xl">Product</h3>
        <h3 className="font-medium text-2xl">Subtotal</h3>
      </li>
      {parsedCart.data.map((product) => {
        const price =
          product.salePrice && product.salePrice > 0
            ? product.salePrice
            : product.normalPrice;
        return (
          <li key={product.id} className="flex justify-between">
            <span className="font-normal text-base text-customGray flex items-center">
              {product.title}{" "}
              <span className="font-medium text-xs">x {product.quantity}</span>
            </span>
            <span className="text-base font-light">
              Rp. {price * (product.quantity || 0)}
            </span>
          </li>
        );
      })}
      <li className="flex justify-between">
        <span className="font-normal text-base">Subtotal</span>
        <span className="text-base font-light">Rp. {subtotal.toFixed(2)}</span>
      </li>
      <li className="flex justify-between">
        <span className="font-normal text-base">Total</span>
        <span className="font-bold text-2xl text-customGold">
          Rp. {total.toFixed(2)}
        </span>
      </li>
    </ul>
  );
};

export default TotalCheckout;
