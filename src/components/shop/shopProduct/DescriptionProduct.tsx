import { FaRegStar, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const DescriptionProduct = () => {
  const productDetail = useSelector(
    (state: RootState) => state.productDetail.product
  );

  const formatPrice = (price: number) => {
    return price.toLocaleString("en-US");
  };

  const rating = productDetail?.rating || 0;
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="font-poppins flex flex-col gap-3">
      <div className="flex flex-col">
        <h3 className="font-normal text-[2.625rem]">{productDetail?.title}</h3>
        <p className="font-medium text-2xl text-customGray">
          Rp.{" "}
          {productDetail &&
            (productDetail.salePrice > 0
              ? formatPrice(productDetail.salePrice)
              : formatPrice(productDetail.normalPrice))}
        </p>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: fullStars }, (_, index) => (
            <FaStar
              key={`filled-${index}`}
              className="text-yellow-400 size-5"
            />
          ))}
          {Array.from({ length: emptyStars }, (_, index) => (
            <FaRegStar
              key={`empty-${index}`}
              className="text-gray-200 size-5"
            />
          ))}
        </div>
        <div className="border-l border-l-customGray pl-6 font-normal text-sm text-customGray">
          5 Customer Reviews
        </div>
      </div>
      <p className="font-normal text-sm">
        Setting the bar as one of the loudest speakers in its class, the Kilburn
        is a compact, stout-hearted hero with a well-balanced audio which boasts
        a clear midrange and extended highs for a sound.
      </p>
    </div>
  );
};

export default DescriptionProduct;
