import BrowseRange from "../components/home/BrowseRange";
import Discover from "../components/home/Discover";
import FuniroFurniture from "../components/home/FuniroFurniture";
import ProductsList from "../components/home/ProductsList";
import database from "../json/database.json";

const Home = () => {
  const products = database.products;

  return (
    <div className="flex flex-col gap-14">
      <Discover />
      <BrowseRange />
      <ProductsList products={products} />
      <FuniroFurniture />
    </div>
  );
};

export default Home;
