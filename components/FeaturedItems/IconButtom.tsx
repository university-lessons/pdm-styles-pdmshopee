import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
  } from "react-native";
  import { AntDesign } from "@expo/vector-icons";
  import React from "react";


  type IconButtonProps = {
    iconName: any;
  } & TouchableOpacityProps;

export default function IconButtom({ iconName, ...rest }: IconButtonProps) {
  return (
      <TouchableOpacity style = {styles.touchable} {...rest}>
         <AntDesign name={iconName} size={15} color="grey" />
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    touchable:{
        backgroundColor: "#FFFFFF",
        height: 25,
        width: 25,
        borderRadius: 50,
        marginTop: -15,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
        },
})