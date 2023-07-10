import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Movie } from "../types/MovieType";
import Entypo from "@expo/vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import { BookmarkState, toggleBookmarkInStore } from "../reducers/bookmark";

const Card = ({ title, image, description, vote, id, rating }: Movie) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const bookmarkSelector = useSelector(
    (state: { bookmark: BookmarkState }) => state.bookmark.value.bookmarks
  );

  useEffect(() => {
    // Check if the movie is bookmarked by comparing its id with the bookmarked movies' ids
    const isMovieBookmarked = bookmarkSelector.some(
      (bookmark) => bookmark.id === id
    );
    setIsBookmarked(isMovieBookmarked);
  }, [bookmarkSelector, id]);

  const handleBookmark = () => {
    // Toggle the bookmark status of the movie and update the store
    dispatch(
      toggleBookmarkInStore({ title, image, description, vote, id, rating })
    );
    setIsBookmarked(true); // Set the bookmarked state to true
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.imageWrapper}
        onPress={() =>
          navigation.navigate("DetailScreen", {
            title,
            image,
            rating,
            vote,
            id,
            description,
          })
        }
      >
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/original/${image}` }}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.infoWrapper}>
        <Text style={styles.title}>
          {/* Limit the title length and add ellipsis if it exceeds 30 characters */}
          {title.length > 30 ? `${title.slice(0, 30)}...` : title}
        </Text>
        <TouchableOpacity style={styles.iconWrapper} onPress={handleBookmark}>
          <Entypo
            name="heart"
            style={[styles.icon, isBookmarked && styles.bookmarkedIcon]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    height: 280,
    width: 160,
  },
  imageWrapper: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    width: 160,
    height: 230,
    borderRadius: 15,
  },
  image: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
  },
  infoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  title: {
    fontSize: 13,
    width: "80%",
    fontWeight: "500",
    color: "#333",
  },
  iconWrapper: {
    width: 25,
    height: 25,
  },
  icon: {
    fontSize: 23,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  bookmarkedIcon: {
    color: "#5C59F4",
  },
});
