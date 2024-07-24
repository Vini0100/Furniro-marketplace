import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { product } from "../../types/product";

const CarouselIns = ({ products }: { products: product[] }) => {
  return (
    <Splide
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
      {products.map((image, index) => (
        <SplideSlide key={index}>
          <div>
            <img
              src={image.images?.mainImage}
              alt={`Slide ${index}`}
              className="rounded-lg max-w-[381px] h-[480px] object-cover m-auto"
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CarouselIns;
