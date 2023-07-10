import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Evilcons from "@expo/vector-icons/EvilIcons";
import { useDispatch } from "react-redux";
import {
  addMovieToStore,
  addResultSearchToStore,
  removeMoviesToStore,
} from "../reducers/movie";

import { TMDB_TOKEN } from "@env";

const Header = () => {
  const [searchText, setSearchText] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleSearchMovie = () => {
    setIsLoading(true);
    // Fetch movie data from the API based on the search text
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          authorization: `Bearer ${TMDB_TOKEN}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Extract relevant movie data from the API response
        const movieData = data.results.map((movie: any) => ({
          title: movie.title,
          overview: movie.overview,
          poster_path: movie.poster_path,
          vote_count: movie.vote_count,
          vote_average: movie.vote_average,
          id: movie.id,
        }));
        // Update state and dispatch actions to store the movie data
        setIsLoading(false);
        dispatch(removeMoviesToStore());
        dispatch(addResultSearchToStore(searchText));
        dispatch(addMovieToStore(movieData));
        setSearchText("");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MovieApp</Text>
      <View style={styles.inputWrapper}>
        <Evilcons name="search" size={30} color="#333" />
        <TextInput
          style={styles.input}
          placeholder="Search a movie"
          onChangeText={setSearchText}
          value={searchText}
          onSubmitEditing={handleSearchMovie}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    height: 130,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    width: "90%",
    color: "#5C59F4",
    fontWeight: "600",
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    height: 45,
    borderRadius: 18,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  input: {
    backgroundColor: "white",
    height: "100%",
    width: "80%",
  },
});
