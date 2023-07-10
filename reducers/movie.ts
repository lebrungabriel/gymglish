import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MovieState = {
  value: { movies: any[]; resultInput: string };
};

const initialState: MovieState = {
  value: { movies: [], resultInput: "" },
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovieToStore: (state: MovieState, action: PayloadAction<string>) => {
      state.value.movies = state.value.movies.concat(action.payload);
    },
    addResultSearchToStore: (
      state: MovieState,
      action: PayloadAction<string>
    ) => {
      state.value.resultInput = action.payload;
    },
    removeMoviesToStore: (state: MovieState) => {
      state.value.movies = [];
    },
    removeResultSearchToStore: (state: MovieState) => {
      state.value.resultInput = "";
    },
  },
});

export const {
  addMovieToStore,
  removeMoviesToStore,
  addResultSearchToStore,
  removeResultSearchToStore,
} = movieSlice.actions;
export default movieSlice.reducer;
