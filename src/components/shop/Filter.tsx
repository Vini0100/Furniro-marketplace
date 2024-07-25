import { BsViewList } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { TiThLarge } from "react-icons/ti";

const Filter = () => {
  return (
    <nav className="flex flex-col md:flex-row bg-customBeige2 md:px-24 px-2 py-6 gap-4 md:gap-0 justify-between font-poppins center">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-6 justify-center md:justify-start">
        <button className="flex items-center gap-3 font-normal text-xl bg-transparent border-none">
          <HiOutlineAdjustmentsHorizontal className="size-5" />
          Filter
        </button>
        <button className="bg-transparent border-none">
          <TiThLarge className="size-4" />
        </button>
        <button className="bg-transparent border-none">
          <BsViewList className="size-5" />
        </button>
        <span className="pl-6 md:border-l-2 md:border-customGray font-normal text-base">
          Showing 1-16 of 32 results
        </span>
      </div>
      <div className="flex gap-7">
        <label
          htmlFor="page"
          className="font-normal text-xl flex gap-2 items-center"
        >
          Show
          <select
            name="page"
            id="page"
            className="py-3 px-[1.125rem] outline-none appearance-none"
          >
            <option value="16" defaultChecked>
              16
            </option>
            <option value="12">12</option>
            <option value="6">6</option>
          </select>
        </label>
        <label
          htmlFor="shortBy"
          className="font-normal text-xl flex gap-2 items-center whitespace-nowrap"
        >
          Short by
          <input
            type="text"
            id="shortBy"
            name="shortBy"
            placeholder="Default"
            className="py-3 outline-none pl-7 w-full"
          />
        </label>
      </div>
    </nav>
  );
};

export default Filter;
