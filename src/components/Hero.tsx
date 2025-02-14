const Hero = () => {
    return (
      <div
        className="relative h-[700px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url(https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=)" }}
      >
        
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
  

        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg animate-fade-in">
            Discover Your <span className="text-yellow-300">Dream Destination</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light drop-shadow-md animate-fade-in">
            Find the best deals on flights, hotels, and holiday packages.
          </p>
  
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slide-up">
            <input
              type="text"
              placeholder="Where to?"
              className="px-5 py-3 w-80 md:w-[400px] rounded-full text-white shadow-lg outline-none border border-gray-300 focus:ring-2 focus:ring-yellow-300"
            />
            <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-yellow-500">
              Search
            </button>
          </div>
  
          
          <div className="mt-10 flex flex-wrap justify-center gap-6 animate-fade-in">
            <div className="bg-white/20 px-6 py-3 rounded-full flex items-center space-x-2">
              <img src="https://cdn-icons-png.flaticon.com/128/681/681611.png" alt="Flights" className="h-6 w-6" />
              <span className="font-medium">Flights</span>
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-full flex items-center space-x-2">
              <img src="https://cdn-icons-png.flaticon.com/128/2921/2921822.png" alt="Hotels" className="h-6 w-6" />
              <span className="font-medium">Hotels</span>
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-full flex items-center space-x-2">
              <img src="https://cdn-icons-png.flaticon.com/128/201/201623.png" alt="Tours" className="h-6 w-6" />
              <span className="font-medium">Tours</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  