import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = function () {
  const { id } = useParams();

  // created a custom hook useRestaurant
  const ResMenu = useRestaurant(id);

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
