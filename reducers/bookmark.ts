import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../types/MovieType";

export type BookmarkState = {
  value: { bookmarks: Movie[] };
};

const initialState: BookmarkState = {
  value: { bookmarks: [] },
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
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

export const { toggleBookmarkInStore } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
