import React from "react";
import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import { CENTER, TEXT } from "../style";

function Button({ title, onPress }) {
  return (
    <TouchableOpacity id="comp1" style={styles.button} onPress={onPress}>
      <Text id="comp2" style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    ...CENTER,
    height: 60,
    borderRadius: 5,
    backgroundColor: "#e83d66",
    marginTop: 15,
    marginBottom: Platform.OS === "ios" ? 0 : 10,
  },
  buttonText: {
    ...TEXT,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default React.memo(Button);
