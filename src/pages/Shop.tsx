import { useEffect, useState } from "react";
import List from "../components/shop/List";
import Filter from "../components/shop/Filter";
import TopBar from "../components/topBar/TopBar";
import { product } from "../types/product";
import { fetchProducts } from "../apiService/apiService";
import BottonBar from "../components/bottonBar/BottonBar";

const Shop = () => {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const listProducts = await fetchProducts();
      setProducts(listProducts);
    };

    getProducts();
  }, []);
  return (
    <div className="flex flex-col">
      <TopBar />
      <Filter />
      <List products={products} />
      <BottonBar />
    </div>
  );
};

export default Shop;
