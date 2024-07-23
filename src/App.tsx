import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
