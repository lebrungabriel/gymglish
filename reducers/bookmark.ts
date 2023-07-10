import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../types/MovieType";

// Define the type for the bookmark state
export type BookmarkState = {
  value: { bookmarks: Movie[] };
};

// Define the initial state for the bookmark slice
const initialState: BookmarkState = {
  value: { bookmarks: [] },
};

// Create the bookmark slice using createSlice
export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    // Reducer function to toggle the bookmark status of a movie
    toggleBookmarkInStore: (
      state: BookmarkState,
      action: PayloadAction<Movie>
    ) => {
      const { bookmarks } = state.value;
      const movie = action.payload;

      // Check if the movie is already in the bookmarks array
      const isMovieInBookmarks = bookmarks.some(
        (bookmark) => bookmark.id === movie.id
      );

      if (isMovieInBookmarks) {
        // Remove the movie from the bookmarks array
        state.value.bookmarks = bookmarks.filter(
          (bookmark) => bookmark.id !== movie.id
        );
      } else {
        // Add the movie to the bookmarks array
        state.value.bookmarks = [...bookmarks, movie];
      }
    },
  },
});

// Export the action creators
export const { toggleBookmarkInStore } = bookmarkSlice.actions;

// Export the reducer
export default bookmarkSlice.reducer;
