const Discover = () => {
  return (
    <div className="bg-scandinavianBackground bg-cover bg-bottom bg-no-repeat flex justify-center md:justify-end items-center pt-[9.56rem] pb-32 px-14 font-poppins">
      <section className="bg-customYellow p-9 pt-[3.87rem] flex flex-col items-start gap-[2.87rem] w-[40.18rem]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h4 className="text-customGray2 text-base font-semibold tracking-[3px]">
              New Arrival
            </h4>
            <h2 className="text-customGold font-bold text-[3.25rem] leading-[65px]">
              Discover Our <br />
              New Collection
            </h2>
          </div>
          <p className="text-customGray2 font-medium text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <button className="bg-customGold text-white font-bold text-base px-[4.5rem] py-[1.56rem]">
          BUY Now
        </button>
      </section>
    </div>
  );
};

export default Discover;
