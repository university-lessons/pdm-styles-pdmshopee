import { StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import IconButton from "./IconButton";

export default function Search() {
  return (
    <View style={styles.container}>
      <IconButton iconName="search1" />
      <TextInput style={styles.input} placeholder="Insira sua pesquisa"></TextInput>
      <IconButton iconName="camerao" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    width: "60%",
    left: 24,
    top: 48,
    height: 48,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flexGrow: 1,
  },
});
