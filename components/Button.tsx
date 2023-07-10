import { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { FilterState } from "../reducers/filter";

type Button = {
  buttonText: string;
  handleFilter: () => void;
};

const Button = ({ buttonText, handleFilter }: Button) => {
  const filterSelector = useSelector(
    (state: { filter: FilterState }) => state.filter.value.filter
  );

  // Update the component when filterSelector changes
  useEffect(() => {}, [filterSelector]);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonText === filterSelector && styles.activeButton,
      ]}
      onPress={handleFilter}
    >
      <Text
        style={[
          styles.text,
          buttonText === filterSelector && { color: "white" },
        ]}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 100,
  },
  text: {
    color: "#6E6E73",
  },
  activeButton: {
    backgroundColor: "#5C59F4",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
});
