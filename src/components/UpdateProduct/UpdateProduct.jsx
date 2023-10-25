import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
  const getSpecificProducts = useLoaderData();
  // console.log(getSpecificProducts);

  const { _id, name, brandName, url, price, rating, type } = getSpecificProducts || {};

  const navigate = useNavigate();

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const url = form.url.value;
    const name = form.name.value;
    const brandName = form.brandName.value.toUpperCase();
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;

    

    const updatedProduct = {
      url,
      name,
      brandName,
      type,
      price,
      rating,
    };

    console.log(updatedProduct);

    // send data to the server
    fetch(`http://localhost:5000/products/update/${_id}`, {
      method:'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0) {
        Swal.fire(
          'Great!',
          "The Product Has Been Updated",
          'success'
        );
        navigate('/myCart');
        form.reset();
      }
    })
  };


  return (
    <div className="">
      <div className="w-8/12 mx-auto py-10 pb-24">
        <h1 className="md:text-4xl text-2xl text-center py-3  font-bold uppercase">
          Update a Product
        </h1>
        <div className="flex flex-col w-32 mx-auto mb-5">
          <div className="py-[0.9px] my-3 bg-red-600"></div>
        </div>

        <form onSubmit={handleUpdateProduct}>

          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>

              <label className="input-group">
                <input
                  type="url"
                  name="url" defaultValue={url}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* Product name and Brand name row */}

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  name="name" defaultValue={name}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  name="brandName"  defaultValue={brandName}
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* Product Type & Price row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>

              <label className="input-group">
                {/* <select className="input input-bordered w-full">
                  <option value="0">Product Type</option>
                  <option value="Phone">Phone</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Camera">Camera</option>
                  <option value="Refrigerator">Refrigerator</option>
                  <option value="MicroOven">MicroOven</option>
                  <option value="Trimer">Trimer</option>
                  <option value="TV">TV</option>
                  <option value="Air Conditioner">Air Conditioner</option>
                  <option value="Airphone/AirBud">Airphone/AirBud</option>
                  <option value="SmartWatch">SmartWatch</option>
                  <option value="Door Lock">Door Lock</option>
                </select> */}
                <input
                  type="text"
                  name="type" defaultValue={type}
                  placeholder="Type (Ex- Phone/Monitor/Refrigerator/TV)"
                  className="input input-bordered w-full"
                />

              </label>
            </div>

            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Price ($)</span>
              </label>

              <label className="input-group">
                <input
                  type="number"
                  name="price"  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* Rating row */}
          <div className="md:flex mb-8">
           {/*  <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div> */}

            <div className="form-control md:w-full ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  name="rating" defaultValue={rating}
                  placeholder="Rate out of 5"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input type="submit" value="Update Product" className="btn btn-block uppercase bg-red-600 hover:bg-red-800 text-white" />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;