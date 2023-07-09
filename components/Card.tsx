import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";

type Movie = {
  title: string;
  image: string;
  description: string;
  rating: number;
  vote: number;
  id: number;
};

const Card = ({ title, image }: Movie) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.imageWrapper}>
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
        <TouchableOpacity style={styles.iconWrapper}>
          <Entypo name="heart" style={styles.icon} />
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
});
