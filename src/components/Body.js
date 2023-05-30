import { restaurantList } from "./constants";
import { RestaurantCard } from "./constants";
import { useState } from "react";

function FilterData(searchText, restaurantList) {
  return restaurantList.filter(function (restaurant) {
    return restaurant.data.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
}

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurant] = useState(restaurantList);

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
            const filterData = FilterData(searchText, restaurantList);

            // update the restaurant list
            setRestaurant(filterData);
          }}
        >
          search
        </button>
      </div>

      <div className="container">
        {restaurants.map(function (restaurant) {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
