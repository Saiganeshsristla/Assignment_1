import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = function () {
  const { id } = useParams();

  // created a custom hook useRestaurant
  const ResMenu = useRestaurantMenu(id);

  const dispatch = useDispatch();
  const handleAddItem = (name) => {
    dispatch(addItems(name));
  };

  if (ResMenu.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="m-5 p-5 mb-96">
      {ResMenu.map((menu) => {
        return (
          <div className="flex gap-3 mt-2">
            <li className="font-semibold">
              {menu.card.info.name} - {menu.card.info.price / 100}Rs
            </li>
            <button className="bg-black text-white px-2 pb-1 mb-1 rounded-full hover:bg-pink-300 hover:text-black" onClick={() => handleAddItem(menu.card.info.name)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
