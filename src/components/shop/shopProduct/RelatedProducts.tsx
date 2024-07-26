import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShowMoreBtn from "../../global/ShowMoreBtn";
import { RootState } from "../../../redux/store";
import Product from "../../product/Product";
import { product as ProductType } from "../../../types/product";

const RelatedProducts = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const productDetails = useSelector(
    (state: RootState) => state.productDetail.product
  );
  const [displayedProducts, setDisplayedProducts] = useState(4);
  const [categoryProducts, setCategoryProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    if (productDetails?.category) {
      const filteredProducts = products.filter(
        (product) => product.category === productDetails.category
      );
      setCategoryProducts(filteredProducts);
    }
  }, [products, productDetails]);

  const handleClick = () => {
    setDisplayedProducts((prev) => prev + 8);
  };

  return (
    <section className="px-24 font-poppins flex flex-col items-center pb-9 gap-3 md:gap-11">
      <h2 className="text-4xl font-medium mb-8">Related Products</h2>
      <div className="flex flex-wrap justify-start gap-8">
        {categoryProducts.slice(0, displayedProducts).map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      {displayedProducts < categoryProducts.length && (
        <ShowMoreBtn handleClick={handleClick} />
      )}
    </section>
  );
};

export default RelatedProducts;
