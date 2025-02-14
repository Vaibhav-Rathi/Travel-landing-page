import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularDestinations from "./components/PopularDestinations";
import Deals from "./components/Deals";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <SearchBar />
      <PopularDestinations />
      <Deals />
      <Footer />
    </div>
  );
};

export default App;
