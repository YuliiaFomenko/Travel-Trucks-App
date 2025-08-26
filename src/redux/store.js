import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";
import { filtersReducer } from "./filters/slice";
import { favoritesReducer, setFavorites } from "./favorites/slice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  }
});

const saved = localStorage.getItem('favorites');
if (saved) {
  try {
    store.dispatch(setFavorites(JSON.parse(saved)))
  } catch(error){
    console.error("Error parsing favorites", error);
  }
}

store.subscribe(() =>{
  const state = store.getState();
  localStorage.setItem('favorites', JSON.stringify(state.favorites.ids));
})