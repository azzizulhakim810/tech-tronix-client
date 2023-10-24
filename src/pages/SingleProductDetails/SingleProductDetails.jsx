import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleProductDetails = () => {
  const foundSingleSearchedProduct = useLoaderData();
  const id = useParams();

  const {_id, name, brandName, url, description, price, rating, type } = foundSingleSearchedProduct || {};
  console.log(foundSingleSearchedProduct, id);
  return (
    <div className="bg-white">
      <div
        className="hero h-[30vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/rvz0K0r/home-bg1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 "></div>
        <div className="hero-content text-left text-neutral-content w-10/12">
          <div className="w-full">
            <h1 className="mb-5 text-7xl font-bold text-white">{name}</h1>
           {/*  <p className="mb-5 text-white text-lg font-medium">
              Get Ready For The Event
            </p> */}
          </div>
        </div>
      </div>

      <div className="bg-white px-10 py-10 w-10/12 mx-auto  z-10 relative grid grid-cols-4 gap-5 items-center">
        <div className="col-span-2 ">
        <img className="w-full border-2 border-red-600" src={url} alt="" />
        </div>
       <div className="col-span-2">
       <h1 className="mb-5 text-4xl font-bold text-black">{name}</h1>
       <button className="btn bg-red-600 hover:bg-white border-2 hover:border-red-600 border-red-600  text-white hover:text-red-600 rounded-none  md:text-base text-xs px-4">${price}</button>
       <p className=" py-3 text-gray-700 text-lg font-medium">
              {description}
            </p>
       </div>
      </div>
    </div>
  );
};

SingleProductDetails.propTypes = {
  
};

export default SingleProductDetails;