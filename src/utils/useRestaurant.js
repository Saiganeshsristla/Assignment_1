import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(function () {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=19.2032638&lng=72.9479015"
    );
    const json = await data.json();
    console.log(
      json.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants
    );

    setAllRestaurants(
      json.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
    setFilterRestaurants(
      json.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants
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
