import { useDispatch, useSelector } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io";
import { RootState } from "../../../redux/store";
import { removeProductFromCart } from "../../../redux/features/cart/cartSlice";

const ItemsCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.products);

  const handleRemoveToCart = (sku: string) => {
    dispatch(removeProductFromCart(sku));
  };

  return (
    <ul className="flex flex-col gap-5">
      {cart.map((product) => (
        <li
          key={product.sku}
          className="flex items-center justify-between font-poppins"
        >
          <div className="flex items-center gap-8">
            <img
              src={product.images.mainImage}
              alt={product.title}
              className="w-[6.563rem] h-[6.563rem] rounded-lg"
            />
            <div className="flex flex-col">
              <h4 className="text-base font-normal">{product.title}</h4>
              <p className="flex gap-4 items-center">
                <span className="font-light text-base">{product.quantity}</span>
                <span className="font-light text-xs">X</span>
                <span className="font-medium text-xs text-customGold">
                  Rp{" "}
                  {product.salePrice > 0
                    ? (product.salePrice * (product.quantity || 1)).toFixed(2)
                    : (product.normalPrice * (product.quantity || 1)).toFixed(
                        2
                      )}
                </span>
              </p>
            </div>
          </div>
          <IoIosCloseCircle
            onClick={() => handleRemoveToCart(product.sku)}
            className="text-customGray min-h-5 min-w-5 cursor-pointer"
            data-testid="closeIcon"
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemsCart;
