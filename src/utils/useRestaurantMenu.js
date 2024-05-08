import { useState, useEffect } from "react";

const useRestaurantMenu = function (id) {
  const [ResMenu, setResMenu] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=15.4909301&lng=73.8278496&&submitAction=ENTER&restaurantId=" +
        id
    );

    const json = await data.json();
    console.log(json);
    setResMenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards);
  }

  return ResMenu;
};

export default useRestaurantMenu;
