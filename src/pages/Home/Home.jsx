import { useLoaderData } from "react-router-dom";
import Brands from "../../components/Brands/Brands";
import { BsCurrencyDollar, BsGift, BsTruck } from 'react-icons/bs';

const Home = () => {
  const brands = useLoaderData();
  // console.log(brands);
  return (
    <div>
      {/* Hero Section  */}
      <div
        className="hero h-[85vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/wzqv9j6/bg-4-new.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-7xl font-bold text-white">
              Walking street under the tunnel
            </h1>
            <p className="mb-5 text-white text-lg font-medium">
              Get Ready For The Next Event
            </p>
            <button className="btn bg-red-600 hover:bg-white  text-white hover:text-red-600 rounded-none border-none md:text-base text-xs px-4">
              Buy Ticket
            </button>
          </div>
        </div>
      </div>

      {/* Brands  */}
      <div className="py-10">
        <h1 className="text-4xl text-center py-3 text-black font-bold">
          Our Brands
        </h1>
        <div className="flex flex-col w-32 mx-auto mb-5">
          <div className="py-[0.9px] my-3 bg-red-600"></div>
        </div>
        

      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 w-11/12 mx-auto">
      {brands.map((brand) => (
        <Brands key={brand.id} brand={brand}></Brands>
      ))}
      </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12">
        <h1 className="text-4xl text-center py-3 text-black font-bold">
          Frequently Asked Question
        </h1>

        <div className="flex flex-col w-32 mx-auto mb-5">
          <div className="py-[1px] my-3 bg-red-600"></div>
        </div>

        {/* accordion  */}
        <div className="md:w-8/12 w-10/12 mx-auto">
          <div className="collapse collapse-plus bg-white py-3 rounded-none my-[1px] border-t-[1px] border-b-[1px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[18px] font-medium text-black ">
            1. What is your website about?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">
              Our website is dedicated to all things electronic, including information, reviews, and recommendations for various electronic products.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white py-3 rounded-none my-[1px] border-b-[1px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[18px] font-medium text-black">
            2. What kind of electronic products do you cover?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">
              We cover a wide range of electronic products, including smartphones, laptops, home appliances, cameras, audio equipment, and more.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white py-3 rounded-none my-[1px] border-b-[1px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[18px] font-medium text-black">
            3. Are the product reviews and recommendations unbiased?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">
              Yes, we aim to provide unbiased and honest reviews and recommendations. Our goal is to help you make informed decisions.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white py-3 rounded-none my-[1px] border-b-[1px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[18px] font-medium text-black">
            4. Is my personal information secure on your website?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">
              We take your privacy seriously. Please review our privacy policy to understand how we handle your personal information.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white py-3 rounded-none my-[1px] border-b-[1px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[18px] font-medium text-black">
            5. Can I request reviews for specific products?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">
              Absolutely! We welcome product review requests. Contact us, and we will do our best to review the product you are interested in.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* After Sell  */}

      <div className="py-12 pb-16 grid md:grid-cols-3 grid-cols-1 gap-2 w-10/12 mx-auto">
        <div className=" text-center w-[90%] py-6 px-4 border-[3px] border-gray-300 rounded-xl">
          <div className="flex justify-evenly items-center">
            <BsCurrencyDollar className="text-3xl text-red-500"></BsCurrencyDollar>
            <h1 className="text-3xl font-bold text-black">MONEY BACK</h1>
          </div>
          <p className="text-gray-500 pt-2">30 DAY MONEY BACK GUARANTEE</p>
        </div>

        <div className=" text-center w-[90%] py-6 px-4 border-[3px] border-gray-300 rounded-xl">
          <div className="flex justify-evenly items-center">
            <BsGift className="text-3xl text-red-500"></BsGift>
            <h1 className="text-3xl font-bold text-black ">SPECIAL SALE</h1>
          </div>
          <p className="text-gray-500 pt-2">ALL ITEMS-SALE UP TO 20% OFF</p>
        </div>

        <div className=" text-center w-[90%] py-6 px-4 border-[3px] border-gray-300 rounded-xl">
          <div className="flex justify-evenly items-center">
            <BsTruck className="text-3xl text-red-500"></BsTruck>
            <h1 className="text-3xl font-bold text-black">FREE SHIPPING</h1>
          </div>
          <p className="text-gray-500 pt-2">FREE SHIP-ON ODER OVER $600.00</p>
        </div>

      </div>


      
    </div>
  );
};

export default Home;