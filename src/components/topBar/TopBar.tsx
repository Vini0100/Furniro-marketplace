import { VscChevronRight } from "react-icons/vsc";
import logotype from "../../assets/images/logotype.svg";
import { useLocation } from "react-router-dom";

const TopBar = () => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const location = useLocation();
  const pathname = location.pathname.replace(/^\/+/, "");
  const formattedPathname = capitalizeFirstLetter(pathname);

  return (
    <div className="relative flex justify-center py-24 font-poppins">
      <div className="absolute inset-0 bg-topBarBackground bg-cover bg-center"></div>
      <div className="flex flex-col items-center gap-3 relative">
        <img src={logotype} alt="logotype" />
        <h1 className="font-medium text-5xl">{formattedPathname}</h1>
        <nav className="flex items-center gap-1 text-base">
          <span className="font-medium">Home</span>
          <VscChevronRight className="text-lg" />
          <span className="font-light">{formattedPathname}</span>
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
