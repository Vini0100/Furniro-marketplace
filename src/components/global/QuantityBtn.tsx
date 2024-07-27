import React from "react";

type QuantityBtnProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const QuantityBtn: React.FC<QuantityBtnProps> = ({ quantity, setQuantity }) => {
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="flex py-5 px-3 justify-center items-center border border-customGray9 rounded-xl text-base font-medium text-black">
      <button onClick={decreaseQuantity}>-</button>
      <span className="px-9">{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
};

export default QuantityBtn;
