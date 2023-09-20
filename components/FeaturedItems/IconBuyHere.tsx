import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text, 
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

type IconButtonProps = {
  text: string;
  iconName: any;
} & TouchableOpacityProps;

export default function IconBuyHere({ text, iconName, ...rest }: IconButtonProps) {
  return (
    <TouchableOpacity style={styles.touchable} {...rest}>
      <Text numberOfLines={1} style={styles.text}>{text}</Text>
      <AntDesign name={iconName} size={15} color="grey" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: "#FFFFFF",
    height: 25,
    gap: 4,
    paddingHorizontal: 8,
    borderRadius: 50,
    marginTop: -15,
    elevation: 5,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 9,
    fontWeight: "900",
  },
});
