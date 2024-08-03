import List from "../components/shop/List";
import Filter from "../components/shop/Filter";
import TopBar from "../components/header/topBar/TopBar";
import BottonBar from "../components/bottonBar/BottonBar";
import { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex flex-col">
      <TopBar />
      <Filter />
      <List />
      <BottonBar />
    </div>
  );
};

export default Shop;
