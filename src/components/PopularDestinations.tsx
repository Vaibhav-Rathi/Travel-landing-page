const destinations = [
    { name: "PARIS", image: "https://static.vecteezy.com/system/resources/previews/045/132/934/non_2x/a-beautiful-picture-of-the-eiffel-tower-in-paris-the-capital-of-france-with-a-wonderful-background-in-wonderful-natural-colors-photo.jpg" },
    { name: "DUBAI", image: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?cs=srgb&dl=pexels-ivan-siarbolin-1513699-3787839.jpg&fm=jpg" },
    { name: "BALI", image: "https://t3.ftcdn.net/jpg/03/23/68/06/360_F_323680669_1plSwiFmIYF6mAplKcZQS8rMBbqqxaCp.jpg" },
  ];
  
  const PopularDestinations = () => {
    return (
      <section className="pt-24 relative -top-27 mx-auto bg-gradient-to-r from-blue-50 to-gray-100 z-[-1]">
        <h2 className="text-4xl text-center font-extrabold mb-10 text-gray-800 tracking-wide">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {destinations.map((destination, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl shadow-xl transform transition duration-500 hover:scale-105"
            >
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
    
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-7xl font-bold drop-shadow-lg">{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default PopularDestinations;
  