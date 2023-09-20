import { StyleSheet, TouchableOpacity, TouchableOpacityProps, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

type IconButtonProps = {
  iconName: any;
  iconText: string;
} & TouchableOpacityProps;

export default function IconButton({ iconName, iconText, ...rest }: IconButtonProps) {
  return (
    <TouchableOpacity style={styles.touchable} {...rest}>
      <FontAwesome name={iconName} size={24} color="black" />
      <Text style={{ ...styles.iconText }}>{iconText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 10,
  },
});
