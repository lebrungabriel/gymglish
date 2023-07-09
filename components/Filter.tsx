import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./Button";

type Props = {};

const Filter = (props: Props) => {
  return (
    <View style={styles.container}>
      <Button buttonText="Top rated" />
      <Button buttonText="Popular" />
      <Button buttonText="Upcoming" />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 60,
  },
});
