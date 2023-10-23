import { Link } from "react-router-dom";


const Carousel = () => {
  return (
    <div className="z-0">
      <div className="carousel w-full">

  <div id="slide1" className="carousel-item relative w-full h-screen" style={{backgroundImage: 'url(/src/assets/img1.jpg)', width:'100%', backgroundSize:'contain', backgroundPosition:'center', backgroundRepeat:'no-repeat', opacity:'100%'}}>

    <div className="absolute transform -translate-y-1/2 left-32 w-1/3 top-1/2 font-normal text-black">
    <p className="mb-5">All new 13-inch & 15-inch</p>
      <h1 className="mb-8 text-5xl font-medium leading-tight">MacBook with retina display</h1>
      <Link to="/shop"><button className="btn bg-emerald-400 text-white border-0 rounded-none px-10">SHOP NOW</button></Link>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full h-screen" style={{backgroundImage: 'url(/src/assets/img2.jpg)', width:'100%', backgroundSize:'contain', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
    
  <div className="absolute transform -translate-y-1/2 left-32 w-1/3 top-1/2 font-normal text-black">
    <p className="mb-5">Apple Watch Series 7 </p>
      <h1 className="mb-8 text-5xl font-medium leading-tight">Future of health is on your wrist </h1>
      <Link to="/shop"><button className="btn bg-emerald-400 text-white border-0 rounded-none px-10">SHOP NOW</button></Link>
      </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full h-screen" style={{backgroundImage: 'url(/src/assets/img3.jpg)', width:'100%', backgroundSize:'contain', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>

  <div className="absolute transform -translate-y-1/2 left-32 w-1/3 top-1/2 font-normal text-black">
    <p className="mb-5">Your new superpower </p>
      <h1 className="mb-8 text-5xl font-medium leading-tight">iPhone 13 Series in Astor</h1>
      <Link to="/shop"><button className="btn bg-emerald-400 text-white border-0 rounded-none px-10">SHOP NOW</button></Link>
      </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>


</div>
    </div>
  );
};

export default Carousel;