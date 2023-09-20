import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from 'react'
import IconButton from "./IconButtom"


interface CardProps{
  text: string,
  link: string
}


export default function Card({ text, link }: CardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:link}}/>
      <Text style={styles.textColor}>{text}</Text>
      <IconButton iconName="caretright" />
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
        backgroundColor: "rgb(254,141,68)",
        height: 90,
        width: 110,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
  },
  
  image:{
    width: 75,
    height: 75,
  },

  textColor:{
    color: "#FFFFFF",
    paddingBottom: 20,
  },
})