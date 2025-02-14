const Deals = () => {
    return (
      <section className="py-15 mb-5 text-center bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Exclusive Deals</h2>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed max-w-3xl mx-auto">
            Book now and get up to <span className="font-bold text-yellow-300">50% off</span> on selected destinations! Don't miss out on the best travel offers.
          </p>
          <button className="bg-yellow-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-transform transform hover:scale-105 duration-300 ease-in-out">
            View Deals
          </button>
        </div>
      </section>
    );
  };
  
  export default Deals;
  