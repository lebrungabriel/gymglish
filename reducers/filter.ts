import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterState = {
  value: { filter: string };
};

const initialState: FilterState = {
  value: { filter: "Top rated" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterInStore: (state: FilterState, action: PayloadAction<string>) => {
      state.value.filter = action.payload;
    },
  },
});

export const { setFilterInStore } = filterSlice.actions;
export default filterSlice.reducer;
