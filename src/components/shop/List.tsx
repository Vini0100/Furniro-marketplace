import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import Product from "../product/Product";
import ButtonsList from "./ButtonsList";
import { addTotalProducts } from "../../redux/features/filterShop/filterShopSlice";

const List = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const filterCategory = useSelector(
    (state: RootState) => state.filterShop.category
  );
  const productsPerPage = useSelector(
    (state: RootState) => state.filterShop.productsPerPage
  );
  const [currentPage, setCurrentPage] = useState(0);

  const productsByCategory = products.filter(
    (product) => product.category == filterCategory
  );

  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts =
    productsByCategory && filterCategory !== "default"
      ? productsByCategory
      : products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(
    (productsByCategory && filterCategory !== "default"
      ? productsByCategory.length
      : products.length) / productsPerPage
  );
  dispatch(
    addTotalProducts(
      (productsByCategory.length
        ? productsByCategory.length
        : products.length) + 1
    )
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage + 1 < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="relative font-poppins max-w-[1240px] mx-auto pt-11 pb-20">
      <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
        {currentProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>

      <ButtonsList
        handlePageChange={handlePageChange}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
};

export default List;
