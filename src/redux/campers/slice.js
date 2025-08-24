import { createSlice } from "@reduxjs/toolkit"
import { fetchCampers } from "./operations"

const initialState = {
  campers: [],
  isLoading: false,
  error: null,
}

const slice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const campersReducer = slice.reducer;