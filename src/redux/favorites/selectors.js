export const selectFavorites = (state) => state.favorites.ids;
export const selectIsFavorite = (id) => (state) => state.favorites.ids.includes(id)