import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { product } from "../../types/product";

const CarouselBR = ({ products }: { products: product[] }) => {
  return (
    <Splide
      options={{
        type: "slide",
        rewind: true,
        rewindByDrag: true,
        gap: "20px",
        autoplay: true,
        pagination: false,
        arrows: false,
        perPage: 3,
        width: "1183px",
        breakpoints: {
          500: { perPage: 1, width: "350px" },
          768: { perPage: 1, width: "500px" },
          1024: { perPage: 2, width: "1000px" },
          1440: { perPage: 3, width: "1183px" },
        },
      }}
      className="w-full"
    >
      {products.map((image, index) => (
        <SplideSlide key={index}>
          <div>
            <img
              src={image.images?.mainImage}
              alt={`Slide ${index}`}
              className="rounded-lg max-w-[381px] h-[480px] object-cover m-auto"
            />
            <h4 className="w-full text-center text-customGray2 text-2xl pt-[1.875rem]">
              {image.category}
            </h4>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CarouselBR;
