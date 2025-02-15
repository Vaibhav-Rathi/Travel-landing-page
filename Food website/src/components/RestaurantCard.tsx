import React from 'react';

// Define the shape of the restaurant object
interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  image: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md hover:shadow-lg">
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-4">{restaurant.name}</h3>
      <p className="text-gray-500">{restaurant.cuisine}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">⭐</span>
        <span>{restaurant.rating}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
