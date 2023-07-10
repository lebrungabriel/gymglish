import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import LoadingSkeleton from "../components/LoadingSkeleton";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";
import { FilterState } from "../reducers/filter";
import { MovieState } from "../reducers/movie";

import { TMDB_TOKEN } from "@env";

import { LinearGradient } from "expo-linear-gradient";
import { View } from "native-base";

type FetchedMovie = {
  title: string;
  poster_path: string;
  vote_average: number;
  id: number;
  vote_count: number;
  overview: string;
};

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    setIsLoading(true);
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
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    };

    //   Fetch movies from API when the component mounts
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setFetchedMovies(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Fetch movies failed", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // Trigger fetchMovies when filterSelector changes
    fetchMovies(filterSelector);
  }, [filterSelector]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "white" }}>
        <LinearGradient colors={["#EFA9C4", "white"]}>
          <Header />
        </LinearGradient>
        <Filter />

        {/* Display search result information */}
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

        {/* Display loading skeleton when data is loading */}
        {isLoading && <LoadingSkeleton />}

        {/* Display movie list */}
        {movieSelector.length > 0 ? (
          <MovieList data={movieSelector} />
        ) : (
          <MovieList data={fetchedMovies} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFA9C4",
    position: "relative",
    marginBottom: 180,
  },
  columnWrapper: {
    justifyContent: "space-evenly",
  },
});
