
const Header = () => {
  return (
    <header className="bg-red-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Zomato</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            className="p-2 rounded-l-lg"
            placeholder="Search for restaurants, cuisines..."
          />
          <button className="bg-white text-red-600 p-2 rounded-r-lg">Search</button>
        </div>
        <div className="flex space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
