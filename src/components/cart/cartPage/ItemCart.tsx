import { useEffect, useState } from "react";
import QuantityBtn from "../../global/QuantityBtn";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { ProductWithQuantity } from "../../../types/product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import {
  removeProductFromCart,
  updateProductQuantity,
} from "../../../redux/features/cart/cartSlice";

type ItemCartProps = {
  product: ProductWithQuantity;
};

const ItemCart = ({ product }: ItemCartProps) => {
  const [quantity, setQuantity] = useState(product.quantity || 1);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const productWithQuantity = {
      ...product,
      quantity: quantity,
    };
    dispatch(updateProductQuantity(productWithQuantity));
  }, [quantity, dispatch, product]);

  const handleRemoveToCart = (sku: string) => {
    dispatch(removeProductFromCart(sku));
  };

  const displayPrice =
    product.salePrice > 0 ? product.salePrice : product.normalPrice;
  const totalPrice = displayPrice * quantity;

  return (
    <li className="flex font-poppins text-base text-customGray gap-8 items-center max-w-[1240px]">
      <img
        src={product.images?.mainImage}
        alt={product.title}
        className="w-[6.563rem] h-[6.563rem] rounded-lg"
      />
      <div className="flex items-center justify-around w-full flex-wrap md:flex-nowrap">
        <span className="w-28 flex-wrap flex">{product.title}</span>
        <span>Rs. {displayPrice.toFixed(2)}</span>
        <QuantityBtn quantity={quantity} setQuantity={setQuantity} />
        <span className="text-black">Rs. {totalPrice.toFixed(2)}</span>
        <RiDeleteBin7Fill
          onClick={() => handleRemoveToCart(product.sku)}
          className="text-customGold cursor-pointer size-7"
        />
      </div>
    </li>
  );
};

export default ItemCart;