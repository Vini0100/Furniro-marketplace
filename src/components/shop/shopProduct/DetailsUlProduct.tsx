import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const DetailsUlProduct = () => {
  const product = useSelector(
    (state: RootState) => state.productDetail.product
  );

  const handleSocialMedia = (socialMedia: string) => {
    window.open(`${socialMedia}`);
  };

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
        <nav className="flex items-center gap-6">
          :
          <FaFacebook
            aria-label="facebook"
            className="size-5 cursor-pointer text-black"
            onClick={() => handleSocialMedia("https://www.facebook.com/")}
          />
          <FaLinkedin
            aria-label="linkedin"
            className="size-5 cursor-pointer text-black"
            onClick={() => handleSocialMedia("https://www.linkedin.com/")}
          />
          <AiFillTwitterCircle
            aria-label="twitter"
            className="size-5 cursor-pointer text-black"
            onClick={() => handleSocialMedia("https://www.twitter.com/")}
          />
        </nav>
      </li>
    </ul>
  );
};

export default DetailsUlProduct;
