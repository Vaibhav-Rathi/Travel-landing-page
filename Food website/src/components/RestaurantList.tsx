import React from 'react';
import RestaurantCard from './RestaurantCard';

// Define the shape of the restaurant object
interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  image: string;
}

// Define the props for the RestaurantList component
interface RestaurantListProps {
  restaurants: Restaurant[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <section id="restaurants" className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Top Restaurants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantList;
