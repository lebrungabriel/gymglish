import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

type Button = {
  buttonText: string;
};

const Button = ({ buttonText }: Button) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{buttonText}</Text>
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
});
