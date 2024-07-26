import BrowseRange from "../components/home/BrowseRange";
import Discover from "../components/home/Discover";
import Share from "../components/home/Share";
import ProductsList from "../components/home/ProductsList";
import Inspirations from "../components/home/Inspirations";

const Home = () => {
  return (
    <div className="flex flex-col gap-14">
      <Discover />
      <BrowseRange />
      <ProductsList />
      <Inspirations />
      <Share />
    </div>
  );
};

export default Home;
