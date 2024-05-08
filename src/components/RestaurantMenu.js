import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import MenuCard from "./MenuCard";

const RestaurantMenu = function () {
  const { id } = useParams();

  // created a custom hook useRestaurant
  const ResMenu = useRestaurantMenu(id);

  

  if (ResMenu.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="m-5 p-5 mb-96 w-full">
      {ResMenu.map((menu) => {
        return (
          <MenuCard info={menu.card.info}/>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
