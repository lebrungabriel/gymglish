import { useEffect } from "react";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import Header from "../components/Header";
import Filter from "../components/Filter";

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

  useEffect(() => {
    // Fetch movies from API when the component mounts
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      {
        headers: {
          authorization: `${process.env.TMDB_TOKEN}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setFetchedMovies(data.results))
      .catch((error) => {
        console.log("Fetch movies failed", error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Filter />
      <FlatList
        data={fetchedMovies}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.poster_path}
            rating={item.vote_average}
            vote={item.vote_count}
            description={item.overview}
            id={item.id}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 20,
          gap: 20,
        }}
        columnWrapperStyle={styles.columnWrapper}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "relative",
    marginBottom: 180,
  },
  columnWrapper: {
    justifyContent: "space-evenly",
  },
});
