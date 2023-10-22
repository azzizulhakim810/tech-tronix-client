import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brands = ({ brand }) => {
  // console.log(brand);
  const { name, image } = brand;
  return (
    <div className="pb-5">
      <div className=" flex justify-center align-middle items-center text-center shadow-md  rounded-xl bg-white bg-clip-border text-gray-700 px-3 pb-10">
        <Link to=''>
        <div>
          <img src={image} className="-mt-5 w-40 object-cover" />
          <p className="-mt-8 block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {name}
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brand: PropTypes.object,
};
export default Brands;
