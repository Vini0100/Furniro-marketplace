import "@splidejs/react-splide/css";

type CardBRProps = {
  src: string;
  categoty: string;
};

const CardBR = ({ src, categoty }: CardBRProps) => {
  return (
    <div className="flex flex-col">
      <img
        src={src}
        alt={categoty}
        className="rounded-lg max-w-[381px] h-[480px] object-cover m-auto"
      />
      <h4 className="w-full text-center text-customGray2 text-2xl pt-[1.875rem]">
        {categoty}
      </h4>
    </div>
  );
};

export default CardBR;
