import { createSlice } from "@reduxjs/toolkit"
import { fetchCamperById, fetchCampers } from "./operations"

const initialState = {
  campers: [],
  currentCamper: null,
  isLoading: false,
  isCurrentLoading: false,
  error: null,
  total: 0,
  hasMore: true,
}

const slice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearCampers: (state) => {
      state.campers = [];
      state.total = 0;
      state.hasMore = true;
      state.error = null;
    },
    clearCurrentCamper: (state) => {
      state.currentCamper = null;
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;

        if (action.meta.arg?.replace) {
          state.campers = [];
        }
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const {items, total, replace} = action.payload;
        state.isLoading = false;
        state.total = total;

        if (replace) {
          state.campers = items;
        } else {
          state.campers = state.campers.concat(items);
        }

        state.hasMore = state.campers.length < total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.isCurrentLoading = true;
        state.error = false;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.currentCamper = action.payload;
        state.isCurrentLoading = false;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isCurrentLoading = false;
        state.error = action.payload;
      })
  }
});

export const { clearCampers, clearCurrentCamper } = slice.actions;

export const campersReducer = slice.reducer;