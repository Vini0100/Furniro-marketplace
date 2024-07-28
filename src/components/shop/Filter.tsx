import { BsViewList } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { TiThLarge } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  addCategory,
  addProductsPerPage,
} from "../../redux/features/filterShop/filterShopSlice";
import { ChangeEvent } from "react";

const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const totalProducts = useSelector(
    (state: RootState) => state.filterShop.totalProducts
  );
  const productsPerPage = useSelector(
    (state: RootState) => state.filterShop.productsPerPage
  );
  const selectedCategory = useSelector(
    (state: RootState) => state.filterShop.category
  );

  const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(addCategory(e.target.value));
  };
  const handleChangePage = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(addProductsPerPage(Number(e.target.value)));
  };

  return (
    <nav className="flex flex-col md:flex-row bg-customBeige2 md:px-24 px-2 py-6 gap-4 md:gap-0 justify-between font-poppins">
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
        <p className="pl-6 md:border-l-2 md:border-customGray font-normal text-base">
          Showing 1-<span>{productsPerPage}</span> of{" "}
          <span>{totalProducts}</span> results
        </p>
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
            onChange={handleChangePage}
            value={productsPerPage}
          >
            <option value={16}>16</option>
            <option value={24}>24</option>
            <option value={32}>32</option>
          </select>
        </label>
        <label
          htmlFor="shortBy"
          className="font-normal text-xl flex gap-2 items-center whitespace-nowrap"
        >
          Short by
          <select
            id="shortBy"
            name="shortBy"
            className="py-3 outline-none w-full px-[1.125rem]"
            onChange={handleChangeCategory}
            value={selectedCategory}
          >
            <option value="default">Default</option>
            <option value="Mesas">Mesas</option>
            <option value="Cadeiras">Cadeiras</option>
            <option value="Racks">Racks</option>
            <option value="Sofas">Sofás</option>
            <option value="Armarios">Armarios</option>
            <option value="Escrivaninhas">Escrivaninhas</option>
          </select>
        </label>
      </div>
    </nav>
  );
};

export default Filter;
