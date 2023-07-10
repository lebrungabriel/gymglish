import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the movie state
export type MovieState = {
  value: { movies: any[]; resultInput: string };
};

// Define the initial state for the movie slice
const initialState: MovieState = {
  value: { movies: [], resultInput: "" },
};

// Create the movie slice using createSlice
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // Reducer function to add a movie to the store
    addMovieToStore: (state: MovieState, action: PayloadAction<string>) => {
      state.value.movies = state.value.movies.concat(action.payload);
    },
    // Reducer function to add the result value of a search to the store
    addResultSearchToStore: (
      state: MovieState,
      action: PayloadAction<string>
    ) => {
      state.value.resultInput = action.payload;
    },
    // Reducer function to remove all movies from the store
    removeMoviesToStore: (state: MovieState) => {
      state.value.movies = [];
    },
    // Reducer function to remove the result value of a search from the store
    removeResultSearchToStore: (state: MovieState) => {
      state.value.resultInput = "";
    },
  },
});

// Export the action creators
export const {
  addMovieToStore,
  removeMoviesToStore,
  addResultSearchToStore,
  removeResultSearchToStore,
} = movieSlice.actions;

// Export the reducer
export default movieSlice.reducer;
