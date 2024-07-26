import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const ColorButtons = () => {
  const product = useSelector(
    (state: RootState) => state.productDetail.product
  );
  const colors = product?.colors;

  return (
    <div className="flex flex-col items-center md:items-start gap-3 font-poppins">
      <h5 className="text-customGray text-sm font-normal">Color</h5>
      <div className="flex gap-4">
        {colors &&
          colors.map((color, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full border border-gray-300"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
      </div>
    </div>
  );
};

export default ColorButtons;
