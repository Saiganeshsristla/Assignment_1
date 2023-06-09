export function FilterData(searchText, restaurantList) {
  return restaurantList.filter(function (restaurant) {
    return restaurant.data.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
}
