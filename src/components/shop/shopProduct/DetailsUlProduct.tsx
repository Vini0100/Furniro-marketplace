import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const DetailsUlProduct = () => {
  const product = useSelector(
    (state: RootState) => state.productDetail.product
  );
  return (
    <ul className="flex flex-col gap-3 text-customGray font-normal text-base">
      <li className="flex gap-4">
        <span className="w-20">SKU</span>
        <span>: {product?.sku}</span>
      </li>
      <li className="flex gap-4">
        <span className="w-20">Category</span>
        <span>: {product?.category}</span>
      </li>
      <li className="flex gap-4">
        <span className="w-20">Tags</span>
        <span>: {product?.tags.join(", ")}</span>
      </li>
      <li className="flex gap-4">
        <span className="w-20">Share</span>
        <span className="text-black flex items-center gap-6">
          : <FaFacebook className="size-5" />
          <FaLinkedin className="size-5" />
          <AiFillTwitterCircle className="size-5" />
        </span>
      </li>
    </ul>
  );
};

export default DetailsUlProduct;
