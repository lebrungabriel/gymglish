import {
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Movie } from "../types/MovieType";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  route: RouteProp<{ DetailScreen: Movie }, "DetailScreen">;
};

// function used to render star icons according to the average vote for the film
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
  const { title, image, rating, vote, description, id } = route.params;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/original/${image}` }}
          style={styles.image}
        />
        <TouchableOpacity style={{ ...styles.iconWrapper, top: 20, right: 20 }}>
          <Entypo name="heart" style={{ fontSize: 25 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.iconWrapper, top: 20, left: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-thin-left" style={{ fontSize: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoWrapper}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>{title}</Text>
          <View style={styles.ratingWrapper}>
            {rating ? renderStars(rating) : <Text>No rating...</Text>}
            {vote ? <Text>({vote})</Text> : <Text>(No vote...)</Text>}
          </View>
        </View>
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
  title: { fontSize: 20, marginBottom: 10, textAlign: "center" },
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
