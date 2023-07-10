import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useSelector } from "react-redux";
import { BookmarkState } from "../reducers/bookmark";

import Card from "../components/Card";

const BookmarkScreen = () => {
  const bookmarkSelector = useSelector(
    (state: { bookmark: BookmarkState }) => state.bookmark.value.bookmarks
  );

  return (
    // SafeAreaView to handle safe area insets
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "white", height: "100%" }}>
        {/* Gradient header */}
        <LinearGradient colors={["#EFA9C4", "white"]}>
          <View style={styles.header}>
            <Text style={styles.title}>My favorites</Text>
          </View>
        </LinearGradient>

        {/* Check if there are no bookmarks */}
        {bookmarkSelector.length === 0 ? (
          <Text style={{ textAlign: "center", marginTop: 100 }}>
            You currently have no films in your favorites...
          </Text>
        ) : (
          // Display the bookmarks in a FlatList
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
              height: "100%",
              gap: 20,
            }}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFA9C4",
    position: "relative",
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
