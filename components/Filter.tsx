import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setFilterInStore } from "../reducers/filter";

type Props = {};

const Filter = (props: Props) => {
  const dispatch = useDispatch();

  const handleFilter = (textFilter: string) => {
    dispatch(setFilterInStore(textFilter));
  };
  return (
    <View style={styles.container}>
      <Button
        buttonText="Top rated"
        handleFilter={() => handleFilter("Top rated")}
      />
      <Button
        buttonText="Popular"
        handleFilter={() => handleFilter("Popular")}
      />
      <Button
        buttonText="Upcoming"
        handleFilter={() => handleFilter("Upcoming")}
      />
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
