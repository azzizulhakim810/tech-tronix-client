import  { useContext } from 'react';

import { Link, useLoaderData, useNavigate} from 'react-router-dom';
import { BsCartCheck } from 'react-icons/bs';
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin, BiSolidStar } from 'react-icons/bi';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const SingleProductDetails = () => {

  const {user} = useContext(AuthContext);
  const userEmail = user.email;

  const foundSingleSearchedProduct = useLoaderData();
  const { name, brandName, url, description, price, rating, type } = foundSingleSearchedProduct || {};

  const productAndEmail = { name, brandName, url, description, price, rating, type, userEmail }


  // Submit info to database 
  const handleSubmitInfo = () => {
 

    fetch('https://tech-tronix-server-de42tnfa0-ah-jims-projects.vercel.app/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productAndEmail)
    })

    Swal.fire(
      'Great!',
      "Successfully Added Product To Cart",
      'success'
    )
 
  }


  return (
    <div className="">
      <div
        className="hero h-[30vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/rvz0K0r/home-bg1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 "></div>
        <div className="hero-content text-left text-neutral-content w-10/12">
          <div className="w-full">
            <h1 className="mb-5 md:text-4xl text-2xl font-bold text-white"> Details about {name}</h1>
           
          </div>
        </div>
      </div>

      <div className=" px-10 py-10 w-10/12 mx-auto  z-10 relative grid lg:grid-cols-4 md:grid-cols-1 gap-16 items-center">
        <div className="col-span-2 ">
        <img className="w-full border-2 border-red-600" src={url} alt="" />
        </div>
       <div className="col-span-2">
       <h1 className="mb-5 md:text-4xl text-2xl font-bold text-red-600">{name}</h1>
       <h1 className=" text-xl font-bold "> ${price}</h1>
       
       <p className="py-2 text-lg text-gray-600 font-medium">
       <span className=''>Brand:</span> {brandName}
            </p>
       <p className=" text-gray-600 text-lg font-medium">
       <span className=''>Type:</span> {type}
            </p>
       <p className="py-2 text-gray-600 text-lg font-medium flex items-center justify-start">
       <span className=' pe-1 '>Rating: </span> <span className='text-red-600'>{rating}</span><BiSolidStar className='text-red-600'></BiSolidStar>
            </p>
       <p className=" py-2 pb-5 text-gray-600 text-lg font-normal">
              {description}
            </p>
            <button onClick={handleSubmitInfo} className="btn bg-red-600 hover:bg-white border-2 hover:border-red-600 border-red-600  text-white hover:text-red-600 rounded-none  md:text-base text-xs px-4">
            <BsCartCheck></BsCartCheck>
              Add to Cart</button>

              <div className="flex justify-start items-center py-5 gap-7">
                <h1 className='py-2 text-lg text-gray-600 font-medium'>Share: </h1>
    <Link
      to="#facebook"
      className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent "
    >
      <BiLogoFacebook className='text-red-600'></BiLogoFacebook>
    </Link>
    <Link
      to="#twitter"
      className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent  bg-clip-text"
    >
      <BiLogoTwitter className='text-red-600'></BiLogoTwitter>
    </Link>
    <Link
      to="#instagram"
      className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent  bg-clip-text"
    >
      <BiLogoInstagram className='text-red-600'></BiLogoInstagram>
    </Link>

    <Link
      to="#instagram"
      className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent  bg-clip-text"
    >
      <BiLogoLinkedin className='text-red-600'></BiLogoLinkedin>
    </Link>
  </div>
       </div>
      </div>
    </div>
  );
};

SingleProductDetails.propTypes = {
  
};

export default SingleProductDetails;