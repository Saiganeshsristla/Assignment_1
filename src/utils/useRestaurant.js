import { useState, useEffect } from "react";

const useRestaurant = function (id) {
  const [ResMenu, setResMenu] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2032638&lng=72.9479015&restaurantId=" +
        id
    );

    const json = await data.json();
    setResMenu(json);
  }

  return ResMenu;
};

export default useRestaurant;
