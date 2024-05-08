import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(function () {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants/?lat=19.2032638&lng=72.9479015&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return [
    allRestaurants,
    setAllRestaurants,
    filterRestaurants,
    setFilterRestaurants,
  ];
};

export default useRestaurant;
