import { VscChevronRight } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";

const TopBarProduct = () => {
  const product = useSelector(
    (state: RootState) => state.productDetail.product
  );

  return (
    <nav className="flex flex-col md:flex-row bg-customBeige2 md:px-24 px-2 py-6 gap-4 md:gap-0 justify-between font-poppins">
      <div className="flex gap-6">
        <div className="text-customGray text-base font-normal flex gap-6 items-center">
          <Link to={"/"}>Home</Link>
          <VscChevronRight className="text-lg text-black" />
          <Link to={"/shop"}>Shop</Link>
          <VscChevronRight className="text-lg text-black" />
        </div>
        <div className="pl-6 border-l-2 border-customGray">
          <p>{product?.title}</p>
        </div>
      </div>
    </nav>
  );
};

export default TopBarProduct;
