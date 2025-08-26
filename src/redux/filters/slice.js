import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  location: '',
  vehicleType: '',
  equipment: {
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  },
  page: 1,
  limit: 4

}

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, {payload}) => {
      state.location = payload
    },
    setVehicleType: (state, {payload}) => {
      state.vehicleType = payload
    },
    toggleEquipment: (state, {payload}) => {
      state.equipment[payload] = !state.equipment[payload]
    },
    resetFilters: () => initialState,
    setPage: (state, {payload}) => {
      state.page = payload
    },
    setLimit: (state, {payload}) => {
      state.limit = payload
    }
  }
})

export const {setLocation, setVehicleType, toggleEquipment, resetFilters, setPage, setLimit} = slice.actions;

export const filtersReducer = slice.reducer