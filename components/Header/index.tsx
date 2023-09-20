import { View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Card from "./Card";
import Search from "./Search";
import IconButton from "./IconButton";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(10);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Card text="Card 1" color={1} />
        <Card text="Card 2" color={0} />
        <Card text="Card 3" color={1} />
        <Card text="Card 2" color={0} />
      </ScrollView>
      <Search />
      <IconButton style={styles.icon} iconName="shoppingcart" noficationNumber={18} />
      <IconButton style={styles.icon2} iconName="cloudo" noficationNumber={8} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    top: 54,
    right: 90,
  },
  icon2: {
    position: "absolute",
    top: 54,
    right: 30,
  },
});
