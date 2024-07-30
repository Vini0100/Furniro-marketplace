import "@splidejs/react-splide/css";
// @ts-expect-error: Ignoring TS error due to type definitions mismatch
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { product } from "../../types/product";
import { useEffect, useRef, useState } from "react";
import { VscArrowRight, VscChevronRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

const CarouselIns = ({ products }: { products: product[] }) => {
  const splideRef = useRef<Splide>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const handleNextSlide = () => {
    if (splideRef.current) {
      splideRef.current.splide.go(">");
    }
  };

  const updateSlideHeight = () => {
    const splideInstance = splideRef.current?.splide;
    if (splideInstance) {
      setCurrentSlideIndex(splideInstance.index);
    }
  };

  useEffect(() => {
    const splideInstance = splideRef.current?.splide;

    if (splideInstance) {
      splideInstance.on("mounted", updateSlideHeight);
      splideInstance.on("moved", updateSlideHeight);
      updateSlideHeight();
    }

    return () => {
      splideInstance?.off("mounted", updateSlideHeight);
      splideInstance?.off("moved", updateSlideHeight);
    };
  }, []);

  return (
    <div className="relative font-poppins">
      <Splide
        ref={splideRef}
        options={{
          type: "slide",
          rewind: true,
          rewindByDrag: true,
          gap: "24px",
          autoplay: false,
          pagination: false,
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
        {products.map((product, index) => (
          <SplideSlide key={index}>
            <div className="relative overflow-hidden">
              <img
                src={product.images?.mainImage}
                alt={`Slide ${index}`}
                className={`object-cover m-auto transition-all duration-500 ease-in-out ${
                  currentSlideIndex === index
                    ? "h-[36.375rem]"
                    : "h-[30.375rem]"
                }`}
              />
              {currentSlideIndex === index && (
                <div className="absolute bottom-6 left-6 flex items-end max-w-[16.5625rem]">
                  <div className="p-8 bg-white bg-opacity-[0.72]">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-base text-customGray4">
                        {index + 1}
                      </h3>
                      <span className="border border-customGray4 w-7"></span>
                      <h3 className="font-medium text-base text-customGray4">
                        {product.category}
                      </h3>
                    </div>
                    <h2 className="text-customGray5 font-semibold text-3xl">
                      Inner Peace
                    </h2>
                  </div>

                  <Link to={"/shop"} className="p-3 bg-customGold">
                    <VscArrowRight className="size-6 text-white" />
                  </Link>
                </div>
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        <VscChevronRight className="text-customGold" size={24} />
      </button>
    </div>
  );
};

export default CarouselIns;
