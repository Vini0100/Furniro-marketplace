import { useState } from "react";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../../redux/features/cart/cartSlice";
import QuantityBtn from "../../global/QuantityBtn";

const AddToCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(
    (state: RootState) => state.productDetail.product
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
      const productWithQuantity = {
        ...product,
        quantity: quantity,
      };
      dispatch(addProductToCart(productWithQuantity));
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-2 font-poppins">
      <QuantityBtn quantity={quantity} setQuantity={setQuantity} />
      <button
        onClick={handleAddToCart}
        className="flex py-5 px-12 items-center border border-black rounded-xl text-xl font-medium"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
