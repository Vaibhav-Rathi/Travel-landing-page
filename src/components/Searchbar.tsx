import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative -top-12 mx-auto w-11/12 md:w-3/4 bg-slate-100 shadow-2xl p-6 rounded-2xl flex flex-col md:flex-row justify-around items-center gap-4 border border-gray-200 transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
      
      <div className="relative w-full md:w-1/3">
        <FaPlaneDeparture className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg" />
        <input
          type="text"
          placeholder="From"
          className="border border-gray-300 p-3 pl-12 rounded-full w-full text-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
        />
      </div>


      
      <div className="relative w-full md:w-1/3">
        <FaPlaneArrival className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg" />
        <input
          type="text"
          placeholder="To"
          className="border border-gray-300 p-3 pl-12 rounded-full w-full text-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
        />
      </div>

      
      <div className="relative w-full md:w-1/4">
        <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg" />
        <input
          type="date"
          className="border border-gray-300 p-3 pl-12 rounded-full w-full text-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
        />
      </div>

      
      <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold text-lg transition transform hover:scale-105 shadow-lg">
        <FaSearch />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
