import ImagesProduct from "./ImagesProduct";
import DescriptionProduct from "./DescriptionProduct";
import SizeButtons from "./SizeButtons";
import ColorButtons from "./ColorButtons";
import AddToCart from "./handleAddToCart";
import DetailsUlProduct from "./DetailsUlProduct";

const MainProduct = () => {
  return (
    <section className="px-24 flex flex-col md:flex-row gap-20">
      <ImagesProduct />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <DescriptionProduct />
          <div className="flex flex-col gap-8">
            <SizeButtons />
            <ColorButtons />
            <AddToCart />
          </div>
        </div>
        <div className="border-t border-customGray pt-10">
          <DetailsUlProduct />
        </div>
      </div>
    </section>
  );
};

export default MainProduct;