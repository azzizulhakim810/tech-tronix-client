
const Carousel = () => {
  return (
    <div className="z-0">
      <div className="carousel w-full -mt-[90px]">

  <div id="slide1" className="carousel-item relative w-full h-screen" style={{backgroundImage: 'url(https://i.ibb.co/hYLCDgR/bg5.jpg)', width:'100%', backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat', opacity:'100%'}}>

    <div className="flex flex-col justify-center items-center font-normal w-full text-white">
    <div className=" text-center transform -translate-y-24">
    <p className="mb-2">iPhone 15</p>
      <h1 className="mb-8 text-6xl font-serif font-medium leading-tight">Forged in Titanium.</h1>
    </div>
      </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full h-screen" style={{backgroundImage: 'url(https://i.ibb.co/ngbph66/bg1.jpg)', width:'100%', backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>

  <div className="flex flex-col justify-center items-start font-normal w-full text-black">
    <div className="text-left transform translate-x-28">
    <p className="mb-2">Google Pixel Watch 2</p>
      <h1 className="mb-8 text-6xl w-4/6 font-serif font-medium leading-tight">Connected to everywhere.</h1>
    </div>
      </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full h-screen" style={{backgroundImage: 'url(https://i.ibb.co/BqhJccj/bg7.jpg)', width:'100%', backgroundSize:'cover', backgroundPosition:'top', backgroundRepeat:'no-repeat'}}>
    
    <div className="flex flex-col justify-center items-start font-normal w-full text-black">
      <div className=" text-left transform translate-x-28">
      <p className="mb-2">Galaxy Tab S</p>
        <h1 className="mb-8 text-6xl w-4/6 font-serif font-medium leading-tight">Change the way you note</h1>
      </div>
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