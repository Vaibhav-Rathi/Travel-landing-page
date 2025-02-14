import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Make sure to install react-icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-12 text-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 opacity-40 z-0"></div>
      <div className="relative z-10">
        <p className="text-lg md:text-xl font-semibold">&copy; 2025 TravelEase</p>
        <div className="mt-6 flex justify-center space-x-6 text-2xl">
          <a href="#" className="text-white hover:text-blue-400 transition-transform transform hover:scale-110 duration-300 ease-in-out">
            <FaFacebook />
          </a>
          <a href="#" className="text-white hover:text-pink-400 transition-transform transform hover:scale-110 duration-300 ease-in-out">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-transform transform hover:scale-110 duration-300 ease-in-out">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
