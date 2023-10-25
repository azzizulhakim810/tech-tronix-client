import { useLoaderData } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";
import Carousel from "../../components/Carousel/Carousel";


const BrandBasedProducts = () => {

  const loadBrandBasedProducts = useLoaderData();
  // console.log(loadBrandBasedProducts[0].brandName);


  return (
    <div>
      <Carousel></Carousel>
      <h1 className="text-3xl text-center py-10 mt-5 text-black font-bold uppercase"> 
      {
        loadBrandBasedProducts.length <= 0 ? 'Nothing Found!' :  
        <>
        All Products of  {loadBrandBasedProducts[0]?.brandName}
        </>
      }
      </h1>
      <div>
      {
       loadBrandBasedProducts.length <= 0 ? 
       <div><h1 className="text-xl text-center pb-10 text-black font-medium">Sorry! There does not have any products of this brand</h1></div> :
       
       <div  className="relative grid lg:grid-cols-2 md:grid-cols-1 gap-10 lg:w-8/12 md:w-6/12 w-10/12 mx-auto py-10 pb-20">

       {   loadBrandBasedProducts?.map(foundProduct => 
          <SingleProduct key={foundProduct._id} foundProduct={foundProduct}></SingleProduct>
        )
        }
         </div>

      }
    </div>
    </div>
  );
};

export default BrandBasedProducts;