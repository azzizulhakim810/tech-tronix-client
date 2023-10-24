import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brands = ({ brand }) => {
  // console.log(brand);
  const { brandName, image } = brand;
  return (
    <div className="pb-5">
      <div className=" flex justify-center align-middle items-center text-center shadow-md  rounded-xl bg-white bg-clip-border text-gray-700 ">
        <Link to={`/allProducts/${brandName}`}>
        <div>
          <img src={image} className="h-full w-full object-cover" />
          <p className="block py-4 font-sans text-lg font-bold leading-relaxed text-blue-gray-900 antialiased">
            {brandName}
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
