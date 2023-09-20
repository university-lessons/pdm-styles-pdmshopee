import { StyleSheet, TouchableOpacity, TouchableOpacityProps, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

type IconButtonProps = {
  iconName: any;
  iconText: string;
  noficationNumber?: number;
  active?: boolean;
} & TouchableOpacityProps;

export default function IconButton({ iconName, iconText, noficationNumber, active, ...rest }: IconButtonProps) {
  const color = active ? "#ee4d2d" : "black";

  return (
    <TouchableOpacity style={styles.touchable} {...rest}>
      <AntDesign name={iconName} size={24} color={color} />
      <Text style={{ ...styles.iconText, color }}>{iconText}</Text>
      {noficationNumber && (
        <View style={styles.noficationNumber}>
          <Text style={styles.noficationNumberText}>{noficationNumber}</Text>
        </View>
      )}
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
  noficationNumber: {
    position: "absolute",
    width: 20,
    height: 20,
    backgroundColor: "#ee4d2d",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    top: 0,
    right: 8,
    marginTop: 2,
  },
  noficationNumberText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
});
