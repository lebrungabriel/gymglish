import { useEffect } from "react";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import Card from "../components/Card";
import Header from "../components/Header";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";
import { FilterState } from "../reducers/filter";
import { MovieState } from "../reducers/movie";

type FetchedMovie = {
  title: string;
  poster_path: string;
  vote_average: number;
  id: number;
  vote_count: number;
  overview: string;
};

const HomeScreen = () => {
  // Define state to hold fetched movies
  const [fetchedMovies, setFetchedMovies] = useState<FetchedMovie[]>([]);

  const filterSelector = useSelector(
    (state: { filter: FilterState }) => state.filter.value.filter
  );

  const movieSelector = useSelector(
    (state: { movie: MovieState }) => state.movie.value.movies
  );

  const searchResult = useSelector(
    (state: { movie: MovieState }) => state.movie.value.resultInput
  );

  const fetchMovies = (filter: string) => {
    let url: string =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

    if (filter === "Popular") {
      url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    } else if (filter === "Upcoming") {
      url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWE5ODE1NGFkZDY3OTZlNTA5NmJkNzZlZjRkZmY0NyIsInN1YiI6IjY0YWIyOTcwNjZhMGQzMDBhZGU4ODI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TqspPd6-Yt6K7KyO1bpqDo2Ax9YNdtvN8ftReHWQ7wE",
      },
    };

    //   Fetch movies from API when the component mounts
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setFetchedMovies(data.results);
      })
      .catch((error) => {
        console.log("Fetch movies failed", error);
      });
  };

  useEffect(() => {
    fetchMovies(filterSelector);
  }, [filterSelector]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Filter />
      {searchResult.length > 1 && (
        <Text
          style={{
            marginLeft: 20,
            marginVertical: 10,
            color: "#495057",
            fontWeight: "600",
          }}
        >
          Résultats pour : {searchResult} ({movieSelector.length})
        </Text>
      )}
      {movieSelector.length > 0 ? (
        <MovieList data={movieSelector} />
      ) : (
        <MovieList data={fetchedMovies} />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
    marginBottom: 180,
  },
  columnWrapper: {
    justifyContent: "space-evenly",
  },
});
