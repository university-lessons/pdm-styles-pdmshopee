import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";
import Search from "./Search";

export default function Header() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Card text="Card 1" color={1} />
        <Card text="Card 2" color={0} />
        <Card text="Card 3" color={1} />
        <Card text="Card 2" color={0} />
      </ScrollView>

      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
