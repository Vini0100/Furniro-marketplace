import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
const TotalCheckout = () => {
  const cart = useSelector((state: RootState) => state.cart.products);

  const calculateTotals = () => {
    let subtotal = 0;
    cart.forEach((product) => {
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
      <div className="h-44 overflow-y-scroll flex flex-col gap-[1.375rem]">
        {cart.map((product) => {
          const price =
            product.salePrice && product.salePrice > 0
              ? product.salePrice
              : product.normalPrice;
          return (
            <li key={product.id} className="flex justify-between">
              <span className="font-normal text-base text-customGray">
                {product.title}{" "}
                <span className="font-medium text-black text-xs">
                  X {product.quantity}
                </span>
              </span>
              <span className="text-base font-light text-nowrap">
                Rp. {price * (product.quantity || 0)}
              </span>
            </li>
          );
        })}
      </div>
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
