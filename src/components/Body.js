import { restaurantList } from "./constants";
import { RestaurantCard } from "./constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import NoRestaurant from "./No_Restaurant";
import { Link } from "react-router-dom";
import { FilterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState();

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  const isOnline = useOnline();

  useEffect(function () {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2032638&lng=72.9479015&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!isOnline) {
    return <h1>Offline! please check your internet connection</h1>;
  }

  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={function (e) {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
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

      <div className="container">
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
