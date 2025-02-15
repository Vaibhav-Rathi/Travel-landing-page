const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[60vh] sm:h-96 flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo=')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-white text-center max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Discover the Best Food Near You
        </h2>
        <p className="text-sm sm:text-lg mb-6">
          Find your favorite restaurants, dishes, and cuisines
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
