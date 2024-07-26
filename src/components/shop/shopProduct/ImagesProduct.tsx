import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const ImagesProduct = () => {
  const productDetail = useSelector(
    (state: RootState) => state.productDetail.product
  );

  const [mainImage, setMainImage] = useState(productDetail?.images?.mainImage);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex flex-row md:flex-col gap-8 order-2 md:order-1">
        {productDetail?.images?.gallery.map((img, index) => (
          <div
            key={index}
            className="h-20 w-[4.75rem] overflow-hidden bg-customBeige2 rounded-lg cursor-pointer"
            onClick={() => setMainImage(img)}
          >
            <img
              src={img}
              alt={`image ${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="md:w-[30.063rem] md:h-[31.25rem] overflow-hidden order-1 md:order-2">
        <img
          src={mainImage}
          alt="main image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ImagesProduct;
