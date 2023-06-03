import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = function () {
  const { id } = useParams();
  const [ResMenu, setResMenu] = useState();

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
  return <h1>{ResMenu?.data?.cards[0]?.card?.card?.info?.name}</h1>;
};

export default RestaurantMenu;
