import Card from "./Card";

const items = [
  {
    src: "https://challenge-week-12-compass.s3.amazonaws.com/images/icons/trophy.svg",
    alt: "trophy",
    title: "High Quality",
    paragraph: "crafted from top materials",
  },
  {
    src: "https://challenge-week-12-compass.s3.amazonaws.com/images/icons/guarantee.svg",
    alt: "guarantee",
    title: "Warranty Protection",
    paragraph: "Over 2 years",
  },
  {
    src: "https://challenge-week-12-compass.s3.amazonaws.com/images/icons/shipping.svg",
    alt: "shipping",
    title: "Free Shipping",
    paragraph: "Order over 150 $",
  },
  {
    src: "https://challenge-week-12-compass.s3.amazonaws.com/images/icons/customerSupport.svg",
    alt: "customer Support",
    title: "24 / 7 Support",
    paragraph: "Dedicated",
  },
];

const BottomBar = () => {
  return (
    <section className="bg-customBeige3 px-2 py-8 md:px-[3.3125rem] md:py-[6.5625rem]">
      <nav className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-stretch gap-6">
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </nav>
    </section>
  );
};

export default BottomBar;
