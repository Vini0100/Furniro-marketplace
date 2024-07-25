import { useState } from "react";
import Product from "../product/Product";
import { product } from "../../types/product";
import ButtonsList from "./ButtonsList";

const ITEMS_PER_PAGE = 16;

const List = ({ products }: { products: product[] }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage + 1 < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="relative font-poppins max-w-[1236px] mx-auto pt-11 pb-20">
      <div className="flex flex-wrap gap-8 justify-center md:justify-start">
        {currentProducts.map((product, index) => (
          <Product product={product} key={index} />
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
