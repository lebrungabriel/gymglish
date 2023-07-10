import { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../types/MovieType";
import Entypo from "@expo/vector-icons/Entypo";
import { BookmarkState, toggleBookmarkInStore } from "../reducers/bookmark";

type Props = {
  route: RouteProp<{ DetailScreen: Movie }, "DetailScreen">;
};

// Function used to render star icons according to the average vote for the film
const renderStars = (rating?: number) => {
  const MAX_STARS = 5;
  const STAR_INCREMENT = 0.5;

  if (!rating || rating <= 0) {
    return null; // No rating, return null
  }

  const starCount = Math.ceil(rating / STAR_INCREMENT);

  return (
    <View style={styles.starWrapper}>
      {[...Array(MAX_STARS)].map((_, index) => (
        <Entypo
          key={index}
          name="star"
          style={[
            styles.starIcon,
            {
              color: index < starCount ? "#FFCA28" : "black",
            },
          ]}
        />
      ))}
    </View>
  );
};

const DetailScreen = ({ route }: Props) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const { title, image, rating, vote, description, id } = route.params;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const bookmarkSelector = useSelector(
    (state: { bookmark: BookmarkState }) => state.bookmark.value.bookmarks
  );

  useEffect(() => {
    // Check if the movie is bookmarked
    const bookmarkedMovie = bookmarkSelector.find((movie) => movie.id === id);
    setIsBookmarked(!!bookmarkedMovie);
  }, [bookmarkSelector, id]);

  const handleBookmark = () => {
    dispatch(
      toggleBookmarkInStore({ title, image, description, vote, id, rating })
    );
    setIsBookmarked(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        {/* Movie image */}
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/original/${image}` }}
          style={styles.image}
        />
        {/* Bookmark icon */}
        <TouchableOpacity
          style={{ ...styles.iconWrapper, top: 20, right: 20 }}
          onPress={handleBookmark}
        >
          <Entypo
            name="heart"
            style={{ fontSize: 25, color: isBookmarked ? "#5C59F4" : "#333" }}
          />
        </TouchableOpacity>
        {/* Back button */}
        <TouchableOpacity
          style={{ ...styles.iconWrapper, top: 20, left: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-thin-left" style={{ fontSize: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoWrapper}>
        <View style={{ width: "100%", alignItems: "center" }}>
          {/* Movie title */}
          <Text style={styles.title}>{title}</Text>
          <View style={styles.ratingWrapper}>
            {/* Render star icons for rating */}
            {rating ? renderStars(rating) : <Text>No rating...</Text>}
            {/* Display vote count */}
            {vote ? <Text>({vote})</Text> : <Text>(No vote...)</Text>}
          </View>
        </View>
        {/* Movie description */}
        <Text style={styles.description}>{description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    flex: 2,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  iconWrapper: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  infoWrapper: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    width: "90%",
    lineHeight: 23,
  },
  starWrapper: {
    flexDirection: "row",
    marginRight: 3,
  },
  starIcon: {
    fontSize: 20,
    marginRight: 2,
  },
});
