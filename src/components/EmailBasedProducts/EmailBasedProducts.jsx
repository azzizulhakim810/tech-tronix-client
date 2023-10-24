import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
/* import { BsCartCheck } from 'react-icons/bs';
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin, BiSolidStar } from 'react-icons/bi'; */

const EmailBasedProducts = ({ specificFilteredProduct }) => {
  const { _id, name, brandName, url, price, rating, type } =
    specificFilteredProduct || {};

    // const [] = useState();


  const handleDelete = (_id) => {
    // console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The Product has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-lg border-x-2 w-full rounded-sm bg-clip-border p-5">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-full rounded-sm bg-clip-border">
          <img src={url} className="object-cover w-full h-52" />
        </div>

        <div className="px-6 ">
          <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900 text-center py-2">
            {name}
          </p>
          <div className="flex items-center justify-between my-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Brand: {brandName}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${price}
            </p>
          </div>
        </div>

        <div className="px-6">
          <div className="flex items-center justify-between mb-5">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Rating: {rating} STAR
            </p>

            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Type: {type}
            </p>
          </div>
        </div>

        <div className="p-6 pt-0 flex justify-center w-full gap-5">
          <Link>
            <button
              onClick={() => handleDelete(_id)}
              className=" w-full select-none rounded-none bg-red-600 text-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Remove
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

EmailBasedProducts.propTypes = {
  specificFilteredProduct: PropTypes.object,
};

export default EmailBasedProducts;
