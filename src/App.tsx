import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./apiService/apiService";
import { addProducts } from "./redux/features/products/productsSlice";
import { AppDispatch } from "./redux/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getProducts = async () => {
      const listProducts = await fetchProducts();
      dispatch(addProducts(listProducts));
    };

    getProducts();
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
