import { Image, StyleSheet, Text, View } from 'react-native'
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from 'react'
import IconBuyHere from './IconBuyHere';

interface CardProps{
  text: string,
  link: string
}


export default function Card({ text, link }: CardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:link}}/>
      <Text style={styles.textColor}>{text}</Text>
      <IconBuyHere iconName="caretright"  text="Compre Agora" />
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
        backgroundColor: "#d3d3d3",
        height: 110,
        width: 150,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        
  },
  
  image:{
    width: 90,
    height: 90,
  },

  textColor:{
    color: "#000000",
    paddingBottom: 20,
  },

})