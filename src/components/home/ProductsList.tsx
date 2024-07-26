import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Product from "../product/Product";
import ShowMoreBtn from "../global/ShowMoreBtn";

const ProductsList = () => {
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.products.products);

  const shuffledProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  const handleClick = () => {
    navigate("/shop");
  };

  return (
    <section className="flex flex-col items-center gap-8 mx-auto max-w-[1236px] font-poppins">
      <h2 className="text-customGray5 text-[2.5rem] font-bold">Our Products</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {shuffledProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <ShowMoreBtn handleClick={handleClick} />
    </section>
  );
};

export default ProductsList;
