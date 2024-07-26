import { Link } from "react-router-dom";

const ProductNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <div className="bg-customRed text-white rounded-full h-52 w-52 flex items-center justify-center">
        <h2 className="text-lg font-bold">Product Not Found</h2>
      </div>
      <p className="mt-4 text-customGray2 font-semibold">
        We couldn't find the product you're looking for.
      </p>
      <Link
        to="/shop"
        className="mt-4 py-2 px-6 bg-white text-customGold rounded-lg font-semibold border border-customGold"
      >
        Go to Shop
      </Link>
    </div>
  );
};

export default ProductNotFound;
