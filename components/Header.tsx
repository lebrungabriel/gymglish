import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Evilcons from "@expo/vector-icons/EvilIcons";
import { useDispatch } from "react-redux";
import {
  addMovieToStore,
  addResultSearchToStore,
  removeMoviesToStore,
} from "../reducers/movie";

const Header = () => {
  const [searchText, setSearchText] = useState<string>();

  const dispatch = useDispatch();

  const handleSearchMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText.trim()}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWE5ODE1NGFkZDY3OTZlNTA5NmJkNzZlZjRkZmY0NyIsInN1YiI6IjY0YWIyOTcwNjZhMGQzMDBhZGU4ODI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TqspPd6-Yt6K7KyO1bpqDo2Ax9YNdtvN8ftReHWQ7wE",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const movieData = data.results.map((movie: any) => ({
          title: movie.title,
          overview: movie.overview,
          poster_path: movie.poster_path,
          vote_count: movie.vote_count,
          vote_average: movie.vote_average,
          id: movie.id,
        }));
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
    backgroundColor: "white",
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
