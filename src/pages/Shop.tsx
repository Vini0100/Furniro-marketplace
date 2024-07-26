import List from "../components/shop/List";
import Filter from "../components/shop/Filter";
import TopBar from "../components/header/topBar/TopBar";
import BottonBar from "../components/bottonBar/BottonBar";

const Shop = () => {
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
