import { View } from "native-base";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import { FetchedMovie } from "../types/FetchedMovieType";

type MovieListProps = {
  data: FetchedMovie[];
};

const MovieList: React.FC<MovieListProps> = ({ data }) => (
  <View style={styles.container}>
    {/* FlatList component to render the movie list */}
    <FlatList
      data={data}
      renderItem={({ item }) => (
        // Render a Card component for each movie item
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
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

export default MovieList;

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  columnWrapper: {
    justifyContent: "space-evenly",
  },
});
