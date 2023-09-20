import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import IconButton from "./IconButton";

export default function Search() {
  return (
    <View style={styles.container}>
      <IconButton iconName="search1" />

      <IconButton iconName="camerao" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    width: "60%",
    top: 40,
    height: 48,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flexGrow: 1,
  },
});
