import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Placeholder() {
  return (
    <View style={styles.container}>
      <Text>Teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
