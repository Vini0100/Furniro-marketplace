import trophy from "../../assets/images/icons/trophy.svg";
import guarantee from "../../assets/images/icons/guarantee.svg";
import shipping from "../../assets/images/icons/shipping.svg";
import customerSupport from "../../assets/images/icons/customerSupport.svg";
import Card from "./Card";

const items = [
  {
    src: trophy,
    alt: "trophy",
    title: "High Quality",
    paragraph: "crafted from top materials",
  },
  {
    src: guarantee,
    alt: "guarantee",
    title: "Warranty Protection",
    paragraph: "Over 2 years",
  },
  {
    src: shipping,
    alt: "shipping",
    title: "Free Shipping",
    paragraph: "Order over 150 $",
  },
  {
    src: customerSupport,
    alt: "customer Support",
    title: "24 / 7 Support",
    paragraph: "Dedicated",
  },
];

const BottomBar = () => {
  return (
    <section className="bg-customBeige3 px-2 py-8 md:px-[3.3125rem] md:py-[6.5625rem]">
      <nav className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-stretch gap-6">
        {items.map((item) => (
          <Card item={item} />
        ))}
      </nav>
    </section>
  );
};

export default BottomBar;
