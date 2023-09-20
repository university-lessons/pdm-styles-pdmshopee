import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function OfferSign() {
  return (
    <View style={styles.container}>
      <View style={styles.container_line}>
        <Text style={styles.counter}>01</Text>
        <Text style={styles.divider}>:</Text>
        <Text style={styles.counter}>05</Text>
        <Text style={styles.divider}>:</Text>
        <Text style={styles.counter}>24</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "black",
    paddingStart: 15,
  },
  container_line: {
    flexDirection: "row",
  },
  counter: {
    color: "white",
    paddingHorizontal: 5,
    borderRadius: 3,
    backgroundColor: "black",
  },
  divider: {
    marginHorizontal: 1,
  },
});
