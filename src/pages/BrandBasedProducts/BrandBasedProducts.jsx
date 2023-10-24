import { useLoaderData } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";
import Carousel from "../../components/Carousel/Carousel";


const BrandBasedProducts = () => {

  const loadBrandBasedProducts = useLoaderData();
  // console.log(loadBrandBasedProducts[0].brandName);


  return (
    <div>
      <Carousel></Carousel>
      <h1 className="text-3xl text-center py-10 text-black font-bold uppercase"> All Product of "{loadBrandBasedProducts[0]?.brandName}"</h1>
      <div className="relative grid grid-cols-2 gap-10 w-8/12 mx-auto py-10 pb-20">
      {
        loadBrandBasedProducts?.map(foundProduct => 
          <SingleProduct key={foundProduct._id} foundProduct={foundProduct}></SingleProduct>
        )
      }
    </div>
    </div>
  );
};

export default BrandBasedProducts;