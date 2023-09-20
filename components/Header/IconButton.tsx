import { StyleSheet, TouchableOpacity, TouchableOpacityProps, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

type IconButtonProps = {
  iconName: any;
  noficationNumber?: number;
} & TouchableOpacityProps;

export default function IconButton({ iconName, noficationNumber, ...rest }: IconButtonProps) {
  return (
    <TouchableOpacity style={styles.touchable} {...rest}>
      <AntDesign name={iconName} size={32} color="white" />
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
    top: -6,
    right: -6,
    marginTop: 2,
  },
  noficationNumberText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
});
