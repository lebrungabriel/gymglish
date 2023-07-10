import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { BookmarkState } from "../reducers/bookmark";

import Card from "../components/Card";

const BookmarkScreen = () => {
  const bookmarkSelector = useSelector(
    (state: { bookmark: BookmarkState }) => state.bookmark.value.bookmarks
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My favourites</Text>
      </View>
      {bookmarkSelector.length === 0 ? (
        <Text style={{ textAlign: "center" }}>
          You currently have no films in your favourites...
        </Text>
      ) : (
        <FlatList
          data={bookmarkSelector}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              image={item.image}
              rating={item.rating}
              vote={item.vote}
              description={item.description}
              id={item.id}
            />
          )}
          horizontal={false}
          contentContainerStyle={{
            paddingTop: 40,
            paddingBottom: 140,
            gap: 20,
          }}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      )}
    </SafeAreaView>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "relative",
    minHeight: "100%",
    marginBottom: 200,
  },
  header: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#5C59F4",
    fontWeight: "600",
  },
  columnWrapper: {
    justifyContent: "space-evenly",
  },
});
