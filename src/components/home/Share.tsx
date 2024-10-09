const Share = () => {
  return (
    <section className="mx-auto font-poppins px-1 pb-12">
      <div className="flex flex-col items-center">
        <h3 className="text-customGray4 font-semibold text-xl">
          Share your setup with
        </h3>
        <h2 className="text-customGray5 text-[2.5rem] font-bold">
          #FuniroFurniture
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-4">
            <img
              src="funiroFurniture/living.png"
              alt="Living Room"
              className="w-full md:w-[17.125rem] h-auto md:h-[23.875rem]"
            />
            <img
              src="funiroFurniture/office.png"
              alt="Office"
              className="w-full md:w-[28.1875rem] h-auto md:h-[19.5rem]"
            />
          </div>
          <div className="flex items-start gap-4">
            <img
              src="funiroFurniture/room.png"
              alt="Room"
              className="w-full md:w-[23.8125rem] h-auto md:h-[20.1875rem]"
            />
            <img
              src="funiroFurniture/tables.png"
              alt="Tables"
              className="w-full md:w-[21.5rem] h-auto md:h-[15.125rem]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <img
              src="funiroFurniture/dinner.png"
              alt="Dinner"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-4">
            <img
              src="funiroFurniture/room2.png"
              alt="Room 2"
              className="w-full md:w-[17.125rem] h-auto md:h-[21.75rem]"
            />
            <img
              src="funiroFurniture/dinner2.png"
              alt="Dinner 2"
              className="w-full md:w-[28.1875rem] h-auto md:h-[27.0625rem]"
            />
          </div>
          <div className="flex items-start gap-4">
            <img
              src="funiroFurniture/living2.png"
              alt="Living Room 2"
              className="w-full md:w-[11.125rem] h-auto md:h-[15.125rem]"
            />
            <img
              src="funiroFurniture/kitchen.png"
              alt="Kitchen"
              className="w-full md:w-[16.125rem] h-auto md:h-[12.25rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Share;
