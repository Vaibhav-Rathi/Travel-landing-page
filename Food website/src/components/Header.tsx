import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Zomato</h1>

        <div className="hidden md:flex space-x-4">
          <input
            type="text"
            className="p-2 rounded-l-lg"
            placeholder="Search for restaurants, cuisines..."
          />
          <button className="bg-white text-red-600 p-2 rounded-r-lg">Search</button>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white text-red-600 py-4 space-y-4 shadow-md">
          <input
            type="text"
            className="p-2 w-11/12 border border-gray-300 rounded"
            placeholder="Search for restaurants, cuisines..."
          />
          <button className="bg-red-600 text-white p-2 rounded w-11/12">Search</button>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
