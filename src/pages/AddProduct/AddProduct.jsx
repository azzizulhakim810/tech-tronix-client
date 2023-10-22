// import Swal from 'sweetalert2';

const AddProduct = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(newCoffee);

    // send data to the server
  };

  return (
    <div className="bg-[#F4F3F0]">
      <div className="w-8/12 mx-auto py-10 pb-24">
        <h1 className="text-4xl text-center py-3 text-black font-bold uppercase">
          Add a Product
        </h1>
        <div className="flex flex-col w-32 mx-auto mb-5">
          <div className="py-[0.9px] my-3 bg-red-600"></div>
        </div>

        <form onSubmit={handleAddCoffee}>

          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  name="photo"
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
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  name="Brand Name"
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
                <select className="input input-bordered w-full">
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
                </select>
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>

              <label className="input-group">
                <input
                  type="number"
                  name="Price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* Short Description and Rating row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ">
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
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rate out of 5"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input type="submit" value="Add Product" className="btn btn-block bg-red-600 hover:bg-red-800 text-white" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
