import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const InformationProduct = () => {
  const product = useSelector(
    (state: RootState) => state.productDetail.product
  );
  const [description, setDescription] = useState(true);

  return (
    <section className="flex flex-col border-y border-customGray md:px-24">
      <div className="flex flex-col">
        <nav className="py-9">
          <ul className="flex flex-col md:flex-row gap-14 md:gap-32 items-center justify-center font-medium text-2xl">
            <button
              onClick={() => setDescription(true)}
              className={description ? "text-black" : "text-customGray"}
            >
              Description
            </button>
            <button
              onClick={() => setDescription(false)}
              className={!description ? "text-black" : "text-customGray"}
            >
              Additional Information
            </button>
          </ul>
        </nav>
        <div className="px-24 font-normal text-base text-customGray gap-7 flex flex-col text-center md:text-start">
          <p>
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
      </div>
      <div className="flex py-9 justify-between flex-col md:flex-row">
        <img
          src={product?.images?.gallery[0]}
          alt="Image 1"
          className="w-[37.813rem] max-h-[31.25rem]"
        />
        <img
          src={product?.images?.gallery[1]}
          alt="Image 2"
          className="w-[37.813rem] max-h-[31.25rem]"
        />
      </div>
    </section>
  );
};

export default InformationProduct;
