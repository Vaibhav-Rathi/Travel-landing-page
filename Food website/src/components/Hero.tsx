
const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/background-food-dishes-european-cuisine-260nw-2490284951.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-white text-center top-1/3">
        <h2 className="text-4xl font-semibold mb-4">Discover the Best Food Near You</h2>
        <p className="mb-6">Find your favorite restaurants, dishes, and cuisines</p>
      </div>
    </section>
  );
};

export default HeroSection;
