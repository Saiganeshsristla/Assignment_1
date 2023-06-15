import { restaurantList } from "./constants";
import { RestaurantCard } from "./constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import NoRestaurant from "./No_Restaurant";
import { Link } from "react-router-dom";
import { FilterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState();

  const [
    allRestaurants,
    setAllRestaurants,
    filterRestaurants,
    setFilterRestaurants,
  ] = useRestaurant();

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline! please check your internet connection</h1>;
  }

  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="my-4 p-4 h-16 ml-16">
        <input
          type="text"
          className="mx-3  h-8 p-2 border-2 border-gray-500 rounded-md hover:bg-gray-200 focus:h-10 focus:bg-white"
          placeholder="search"
          value={searchText}
          onChange={function (e) {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-purple-900 text-white px-2 pb-1 mb-1 rounded-full hover:bg-purple-400 hover:text-black"
          onClick={function () {
            // Filterout the restaurants
            const filterData = FilterData(searchText, allRestaurants);

            // update the restaurant list
            setFilterRestaurants(filterData);
          }}
        >
          search
        </button>
      </div>

      <div className="flex justify-center mx-2 flex-wrap">
        {filterRestaurants.length === 0 ? (
          <NoRestaurant />
        ) : (
          filterRestaurants.map(function (restaurant) {
            return (
              <Link
                to={"/restaurant/" + restaurant?.data?.id}
                key={restaurant?.data?.id}
              >
                <RestaurantCard {...restaurant?.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
