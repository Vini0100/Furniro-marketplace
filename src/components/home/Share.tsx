import living from "../../assets/images/home/FuniroFurniture/living.png";
import office from "../../assets/images/home/FuniroFurniture/office.png";
import room from "../../assets/images/home/FuniroFurniture/room.png";
import tables from "../../assets/images/home/FuniroFurniture/tables.png";
import dinner from "../../assets/images/home/FuniroFurniture/dinner.png";
import room2 from "../../assets/images/home/FuniroFurniture/room2.png";
import dinner2 from "../../assets/images/home/FuniroFurniture/dinner2.png";
import living2 from "../../assets/images/home/FuniroFurniture/living2.png";
import kitchen from "../../assets/images/home/FuniroFurniture/kitchen.png";

const Share = () => {
  return (
    <section className="mx-auto font-poppins px-1">
      <div className="flex flex-col items-center">
        <h3 className="text-customGray4 font-semibold text-xl">
          Share your setup with
        </h3>
        <h2 className="text-customGray5 text-[2.5rem] font-bold">
          #FuniroFurniture
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 overflow-hidden">
        {/* Col1 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-4">
            <img
              src={living}
              alt="Living Room"
              className="w-full md:w-[17.125rem] h-auto md:h-[23.875rem]"
            />
            <img
              src={office}
              alt="Office"
              className="w-full md:w-[28.1875rem] h-auto md:h-[19.5rem]"
            />
          </div>
          <div className="flex items-start gap-4">
            <img
              src={room}
              alt="Room"
              className="w-full md:w-[23.8125rem] h-auto md:h-[20.1875rem]"
            />
            <img
              src={tables}
              alt="Tables"
              className="w-full md:w-[21.5rem] h-auto md:h-[15.125rem]"
            />
          </div>
        </div>
        {/* Col2 */}
        <div className="flex items-center justify-center">
          <div>
            <img src={dinner} alt="Dinner" className="w-full h-auto" />
          </div>
        </div>
        {/* Col3 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-4">
            <img
              src={room2}
              alt="Room 2"
              className="w-full md:w-[17.125rem] h-auto md:h-[21.75rem]"
            />
            <img
              src={dinner2}
              alt="Dinner 2"
              className="w-full md:w-[28.1875rem] h-auto md:h-[27.0625rem]"
            />
          </div>
          <div className="flex items-start gap-4">
            <img
              src={living2}
              alt="Living Room 2"
              className="w-full md:w-[11.125rem] h-auto md:h-[15.125rem]"
            />
            <img
              src={kitchen}
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
