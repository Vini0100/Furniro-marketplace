import CarouselBR from "./CarouselBR";

const BrowseRange = () => {
  return (
    <section className="font-poppins flex flex-col items-center gap-[3.875rem] max-w-[1183px] mx-auto">
      <div className="flex flex-col text-center">
        <h2 className="font-bold text-[2rem]">Browse The Range</h2>
        <h3 className="font-normal text-xl text-customGray3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
      </div>
      <div className="flex justify-center">
        <CarouselBR />
      </div>
    </section>
  );
};

export default BrowseRange;
