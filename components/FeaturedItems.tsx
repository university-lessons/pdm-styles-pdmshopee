import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function FeaturedItems() {
  return (
    <View style={styles.container}>
      <Text>FeaturedItems</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "red",
  },
});
