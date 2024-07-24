import { Link } from "react-router-dom";
import { product } from "../../types/product";
import Product from "../product/Product";

const shuffleArray = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

interface PropsList {
  products: product[];
}

const ProductsList = ({ products }: PropsList) => {
  const shuffledProducts = shuffleArray(products);
  const randomProducts = shuffledProducts.slice(0, 8);
  console.log(randomProducts);

  return (
    <section className="flex flex-col items-center gap-8 mx-auto max-w-[1236px] font-poppins">
      <h2 className="text-customGray5 text-[2.5rem] font-bold">Our Products</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {randomProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Link
        to={"/shop"}
        className="py-3 px-[4.625rem] text-customGold font-semibold text-base border border-customGold"
      >
        Show More
      </Link>
    </section>
  );
};

export default ProductsList;
