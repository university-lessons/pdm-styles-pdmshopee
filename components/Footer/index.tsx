import { View, StyleSheet } from "react-native";
import IconButton from "./IconButton";
import React, { useState } from "react";

export default function index() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <IconButton iconName="like2" iconText="Descobertas" onPress={() => setActiveIndex(0)} active={activeIndex == 0} />
      <IconButton iconName="shoppingcart" iconText="Oficial" onPress={() => setActiveIndex(1)} active={activeIndex == 1} />
      <IconButton iconName="gift" iconText="Prêmios" onPress={() => setActiveIndex(2)} active={activeIndex == 2} />
      <IconButton
        iconName="notification"
        iconText="Notificações"
        noficationNumber={11}
        onPress={() => setActiveIndex(3)}
        active={activeIndex == 3}
      />
      <IconButton iconName="user" iconText="Eu" onPress={() => setActiveIndex(4)} active={activeIndex == 4} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 24,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
