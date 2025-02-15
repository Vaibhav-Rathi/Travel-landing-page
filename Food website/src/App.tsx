import Header from './components/Header';
import HeroSection from './components/Hero';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';

const App = () => {
  const restaurants = [
    { id: 1, name: 'Pizza Hut', cuisine: 'Italian', rating: 4.5, image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/29/29e46475-55d5-4a18-a901-3c14fdd5ba79_1012175.jpg' },
    { id: 2, name: 'Burger King', cuisine: 'American', rating: 4.3, image: 'https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png' },
    { id: 3, name: 'Sushi World', cuisine: 'Japanese', rating: 4.8, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/k2uToV_x8DzfFejrdiKa-Q/348s.jpg' },
    { id: 4, name: 'Indian Cuisine', cuisine: 'Indian', rating: 4.5, image: 'https://nfcihospitality.com/wp-content/uploads/2024/09/traditional-Indian-Food.jpg' },
  ];

  return (
    <div>
      <Header />
      <HeroSection />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </div>
  );
};

export default App;
