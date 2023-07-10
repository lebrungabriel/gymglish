import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the filter state
export type FilterState = {
  value: { filter: string };
};

// Define the initial state for the filter slice
const initialState: FilterState = {
  value: { filter: "Top rated" },
};

// Create the filter slice using createSlice
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // Reducer function to set the value of the filter in the store
    setFilterInStore: (state: FilterState, action: PayloadAction<string>) => {
      state.value.filter = action.payload;
    },
  },
});

// Export the action creators
export const { setFilterInStore } = filterSlice.actions;

// Export the reducer
export default filterSlice.reducer;
