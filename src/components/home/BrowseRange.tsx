import CardBR from "./CardBR";
import bedroom from "../../assets/images/home/browseRange/bedroom.png";
import living from "../../assets/images/home/browseRange/living.png";
import dining from "../../assets/images/home/browseRange/dining.png";

const BrowseRange = () => {
  return (
    <section className="font-poppins flex flex-col items-center gap-[3.875rem] max-w-[1183px] mx-auto cursor-pointer">
      <div className="flex flex-col text-center">
        <h2 className="font-bold text-[2rem]">Browse The Range</h2>
        <h3 className="font-normal text-xl text-customGray3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5">
        <CardBR src={bedroom} categoty={"Dining"} />
        <CardBR src={living} categoty={"Living"} />
        <CardBR src={dining} categoty={"Bedroom"} />
      </div>
    </section>
  );
};

export default BrowseRange;
