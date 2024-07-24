import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { product } from "../../types/product";
import { useRef } from "react";
import { VscChevronRight } from "react-icons/vsc";

const CarouselIns = ({ products }: { products: product[] }) => {
  const splideRef = useRef<Splide>(null);

  const goToNextSlide = () => {
    if (splideRef.current) {
      splideRef.current.splide.go(">");
    }
  };

  return (
    <div className="relative">
      <Splide
        ref={splideRef}
        options={{
          type: "slide",
          rewind: true,
          rewindByDrag: true,
          gap: "24px",
          autoplay: false,
          pagination: true,
          arrows: false,
          perPage: 2,
          width: "834px",
          breakpoints: {
            500: { perPage: 1, width: "350px" },
            768: { perPage: 1, width: "500px" },
            1440: { perPage: 2, width: "834px" },
          },
        }}
        className="w-full"
      >
        {products.map((image, index) => (
          <SplideSlide key={index}>
            <div className="relative">
              <img
                src={image.images?.mainImage}
                alt={`Slide ${index}`}
                className="rounded-lg max-w-[381px] h-[480px] object-cover m-auto"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <button
        // quando eu clicar neste botão, aparecer no console log os detalhes das próxima imagem
        onClick={goToNextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <VscChevronRight className="text-customGold" size={24} />
      </button>
    </div>
  );
};

export default CarouselIns;
