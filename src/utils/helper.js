export function FilterData(searchText, restaurantList) {
  return restaurantList.filter(function (restaurant) {
    return restaurant?.info?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
}
