import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = function () {
  const { id } = useParams();

  // created a custom hook useRestaurant
  const ResMenu = useRestaurantMenu(id);

  if (ResMenu.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="w-full h-auto flex flex-col items-center m-10 mb-48">
      <img className="w-[400px]"
        src={
          IMG_CDN_URL +
          ResMenu?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
        }
      />
      <h1 className="font-bold text-2xl">Wellcome to {ResMenu?.data?.cards[0]?.card?.card?.info?.name}</h1>
      <h3>{ResMenu?.data?.cards[0]?.card?.card?.info?.locality}</h3>
      <h3>{ResMenu?.data?.cards[0]?.card?.card?.info?.areaName}</h3>
    </div>
  );
};

export default RestaurantMenu;
