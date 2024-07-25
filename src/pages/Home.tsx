import BrowseRange from "../components/home/BrowseRange";
import Discover from "../components/home/Discover";
import Share from "../components/home/Share";
import ProductsList from "../components/home/ProductsList";
import Inspirations from "../components/home/Inspirations";
import { product } from "../types/product";
import { fetchProducts } from "../apiService/apiService";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const listProducts = await fetchProducts();
      setProducts(listProducts);
    };

    getProducts();
  }, []);

  return (
    <div className="flex flex-col gap-14">
      <Discover />
      <BrowseRange />
      <ProductsList products={products} />
      <Inspirations products={products} />
      <Share />
    </div>
  );
};

export default Home;
