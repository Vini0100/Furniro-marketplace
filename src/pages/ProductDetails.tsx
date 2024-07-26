import { useParams } from "react-router-dom";
import TopBarProduct from "../components/topBar/TopBarProduct";
import { useEffect, useState } from "react";
import { addProduct } from "../redux/features/products/productDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import ProductNotFound from "../components/shop/ProductNotFound";
import MainProduct from "../components/shop/shopProduct/MainProduct";
import InformationProduct from "../components/shop/shopProduct/InformationProduct";
import RelatedProducts from "../components/shop/shopProduct/RelatedProducts";

const ProductDetails = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();
  const [found, SetFound] = useState(false);

  useEffect(() => {
    const getProductDetails = () => {
      const foundProduct = products.find((p) => p.sku === productId);
      if (foundProduct) {
        SetFound(true);
        dispatch(addProduct(foundProduct));
      }
    };

    getProductDetails();
  }, [productId, products, dispatch]);

  return (
    <div className="flex flex-col">
      <TopBarProduct />
      {found ? (
        <div className="flex flex-col gap-9">
          <MainProduct />
          <InformationProduct />
          <RelatedProducts />
        </div>
      ) : (
        <ProductNotFound />
      )}
    </div>
  );
};

export default ProductDetails;
