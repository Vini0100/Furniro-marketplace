import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const SizeButtons = () => {
  const product = useSelector(
    (state: RootState) => state.productDetail.product
  );
  const sizes = product?.sizes || [];
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");

  return (
    <div className="flex flex-col items-center md:items-start gap-3">
      <h5 className="text-sm font-normal text-customGray">Size</h5>
      <div className="flex gap-2">
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg text-center text-white ${
              size === selectedSize ? "bg-customGold" : "bg-gray-300"
            } hover:bg-customGold focus:outline-none`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeButtons;
