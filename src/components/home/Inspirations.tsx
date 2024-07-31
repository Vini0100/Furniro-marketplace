import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CarouselIns from "./CarouselIns";
import { useNavigate } from "react-router-dom";

const Inspirations = () => {
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.products.products);

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="bg-customBeige py-11 px-[6.25rem] font-poppins">
      <div className="flex items-center flex-col lg:flex-row gap-[2.625rem]">
        <div className="flex flex-col gap-6 items-start max-w-[26.375rem]">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-[2.5rem] leading-[3rem]">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-customGray4 font-medium text-base">
              Our designer already made a lot of beautiful prototypes of rooms
              that inspire you
            </p>
          </div>
          <button
            className="bg-customGold py-3 px-9 text-white font-semibold text-base"
            onClick={() => handleClick("/shop")}
          >
            Explore More
          </button>
        </div>
        <div className="h-[41.875rem]">
          <CarouselIns products={products} />
        </div>
      </div>
    </section>
  );
};

export default Inspirations;
