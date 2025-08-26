import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, {payload: id}) => {
      const index = state.ids.indexOf(id);
      if(index === -1) {
        state.ids.push(id)
      } else {
        state.ids.splice(index, 1)
      }
    },
    setFavorites: (state, {payload}) => {
      state.ids = payload;
    }
  }
})

export const {toggleFavorite, setFavorites} = slice.actions;

export const favoritesReducer = slice.reducer;