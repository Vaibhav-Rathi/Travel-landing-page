import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg py-4 px-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-white tracking-wide">
          Travel<span className="text-yellow-300">Ease</span>
        </h1>

        
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {["Home", "Flights", "Hotels", "Contact"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <span className="transition duration-300 hover:text-yellow-300">{item}</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        
        <button className="hidden md:block bg-yellow-300 text-blue-900 font-semibold px-5 py-2 rounded-full shadow-md transition-transform transform hover:scale-105">
          Sign In
        </button>

        
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white text-gray-900 py-4 space-y-4 shadow-md">
          {["Home", "Flights", "Hotels", "Contact"].map((item) => (
            <li key={item} className="text-lg font-medium hover:text-blue-600">
              {item}
            </li>
          ))}
          <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md mt-2 shadow-md">
            Sign In
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
