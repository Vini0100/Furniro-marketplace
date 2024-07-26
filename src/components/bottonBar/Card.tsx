import { CardItem } from "../../types/CardItem";

type CardProps = {
  item: CardItem;
};

const Card = ({ item }: CardProps) => {
  return (
    <div
      key={item.alt}
      className="flex flex-col md:flex-row items-center md:items-start gap-3 flex-grow"
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-12 h-12 md:w-16 md:h-16"
      />
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-semibold text-lg md:text-2xl text-center md:text-left">
          {item.title}
        </h3>
        <p className="text-customGray6 text-base md:text-xl font-medium text-center md:text-left">
          {item.paragraph}
        </p>
      </div>
    </div>
  );
};

export default Card;
