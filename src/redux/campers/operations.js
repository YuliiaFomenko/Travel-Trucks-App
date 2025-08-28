import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { buildQuery } from "../../utils/buildQuery";


axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk('campers/fetchAll', 
  async (arg = {replace: true, page: 1, limit: 4}, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const filters = state.filters;
    const query = buildQuery(filters)

    const response = await axios.get(`/campers?page=${arg.page}&limit=${arg.limit}&${query}`);

    const items = response.data.items;
    const total = response.data.total;

    return {items, total, replace: arg.replace};
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const fetchCamperById = createAsyncThunk('campers/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)  
    }
  }
)