import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = function () {
  const { id } = useParams();
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

  if (ResMenu.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="Menu">
      <img
        src={
          IMG_CDN_URL +
          ResMenu?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
        }
      />
      <h1>Wellcome to {ResMenu?.data?.cards[0]?.card?.card?.info?.name}</h1>
      <h3>{ResMenu?.data?.cards[0]?.card?.card?.info?.locality}</h3>
      <h3>{ResMenu?.data?.cards[0]?.card?.card?.info?.areaName}</h3>
    </div>
  );
};

export default RestaurantMenu;
