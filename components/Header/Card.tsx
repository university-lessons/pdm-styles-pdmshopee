import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import React from "react";

const CARD_COLORS = ["rgb(254,141,68)", "rgb(235,64,30)"];

interface CardProps {
  text: string;
  color: number;
}

export default function Card({ text, color }: CardProps) {
  console.log(color);

  // exemplo spread operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  //   const a = { chave: 123 };
  //   const b = { porta: 3000 };
  //   const c = { ...a, ...b };

  const customStyle = {
    ...styles.container,
    backgroundColor: CARD_COLORS[color],
  };

  return (
    <View style={customStyle}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: 150,
  },
});
