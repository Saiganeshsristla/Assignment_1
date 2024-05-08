import React from "react";
import { IMG_CDN_URL } from "./constants";
import { useDispatch } from "react-redux";

function MenuCard(props) {
  const { name, price, imageId } = props.info;

  const dispatch = useDispatch();
  const handleAddItem = (name) => {
    dispatch(addItems(name));
  };
  return (
    <div className=" w-full flex justify-center">
      <div className=" flex gap-5 justify-between w-[35%] h-28 mb-5 rounded-lg shadow-lg">
        <div className="pl-2">
          <p className="font-semibold">
            {name}
          </p>
          <p className="font-semibold px-2">₹{price / 100}</p>
          <button
            className="bg-black text-white m-4 px-2 pb-1 mb-1 rounded-full hover:bg-pink-300 hover:text-black"
            onClick={() => handleAddItem(name)}
          >
            Add to cart
          </button>
        </div>
        <div>
          <img className="h-full rounded-lg w-32" src={IMG_CDN_URL + imageId}></img>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
