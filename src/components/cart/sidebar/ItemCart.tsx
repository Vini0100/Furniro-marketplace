import testImg from "../../../assets/images/test.png";
import { IoIosCloseCircle } from "react-icons/io";

const ProductsCart = () => {
  return (
    <div className="flex items-center justify-between font-poppins">
      <div className="flex items-center gap-8">
        <img
          src={testImg}
          alt="item card"
          className="w-[6.563rem] h-[6.563rem] rounded-lg"
        />
        <div className="flex flex-col">
          <h4 className="text-base font-normal">Asgaard sofa</h4>
          <p className="flex gap-4 items-center">
            <span className="font-light text-base">1</span>
            <span className="font-light text-xs">X</span>
            <span className="font-medium text-xs text-customGold">
              Rp. 250,000.00
            </span>
          </p>
        </div>
      </div>
      <IoIosCloseCircle className="text-customGray size-5" />
    </div>
  );
};

export default ProductsCart;
