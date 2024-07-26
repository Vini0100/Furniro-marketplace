import { useState } from "react";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-2 font-poppins">
      <div className="flex py-5 px-3 items-center border border-customGray9 rounded-lg text-base font-medium">
        <button onClick={decreaseQuantity}>-</button>
        <span className="px-9">{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
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
