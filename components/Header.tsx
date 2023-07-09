import { StyleSheet, Text, TextInput, View } from "react-native";
import Evilcons from "@expo/vector-icons/EvilIcons";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MovieApp</Text>
      <View style={styles.inputWrapper}>
        <Evilcons name="search" size={30} color="#333" />
        <TextInput style={styles.input} placeholder="Search a movie" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 130,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    width: "90%",
    color: "#5C59F4",
    fontWeight: "600",
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    height: 45,
    borderRadius: 18,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  input: {
    backgroundColor: "white",
    height: "100%",
    width: "80%",
  },
});
