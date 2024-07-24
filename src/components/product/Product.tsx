import { product } from "../../types/product";
import Balloon from "./Balloon";

const Product = ({ product }: product) => {
  return (
    <div className="flex flex-col font-poppins w-[17.8125rem]">
      <div className="relative">
        <img
          src={product.images?.mainImage}
          alt={product.title}
          className="h-[18.75rem]"
        />
        <div className="absolute top-6 right-6 flex flex-col gap-1">
          {product.discountPercentage !== 0 ? (
            <Balloon discount={product.discountPercentage} />
          ) : null}
          {product.new && <Balloon discount={null} />}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 bg-customGray7">
        <h4 className="font-semibold text-2xl text-customGray5">
          {product.title}
        </h4>
        <p className="font-medium text-base text-customGray6">
          {product.description?.short}
        </p>
        <div className="flex gap-4 items-center">
          <span className="text-xl text-customGray5 font-semibold">
            Rp {product.normalPrice}
          </span>
          {product.salePrice !== 0 ? (
            <span className="text-base text-customGray8 font-normal line-through">
              Rp {product.salePrice}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Product;
