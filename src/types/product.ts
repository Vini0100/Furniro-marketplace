export type product = {
  id: number;
  sku: string;
  title: string;
  category: string;
  tags: string[];
  normalPrice: number;
  salePrice: number;
  discountPercentage: number;
  new: boolean;
  description: Idescription;
  colors: Icolors[];
  sizes: string[];
  rating: number;
  images: Iimages;
};

type Idescription = {
  short: string;
  long: string;
};

type Icolors = {
  name: string;
  hex: string;
};
type Iimages = {
  mainImage: string;
  gallery: string[];
};
