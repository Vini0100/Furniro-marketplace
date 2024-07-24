import BrowseRange from "../components/home/BrowseRange";
import Discover from "../components/home/Discover";
import Share from "../components/home/Share";
import ProductsList from "../components/home/ProductsList";
import database from "../json/database.json";
import Inspirations from "../components/home/Inspirations";
import { product } from "../types/product";

const Home = () => {
  const products: product[] = database.products;

  return (
    <div className="flex flex-col gap-14">
      <Discover />
      <BrowseRange products={products} />
      <ProductsList products={products} />
      <Inspirations products={products} />
      <Share />
    </div>
  );
};

export default Home;
