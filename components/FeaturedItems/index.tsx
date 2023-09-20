import { StyleSheet, Text, View } from 'react-native'
import { Dimensions } from "react-native";
import React from 'react'
import SmallCard from './SmallCard';
import BigCard from './BigCard';

export default function FeaturedItems() {
  return (
    <View style={styles.container}>
      <SmallCard  text='Moda' link='https://www.pngmart.com/files/22/T-Shirt-Transparent-Background.png'></SmallCard>
      <BigCard text='Moda' link='https://www.pngmart.com/files/22/T-Shirt-Transparent-Background.png'></BigCard>
      <SmallCard  text='Moda' link='https://www.pngmart.com/files/22/T-Shirt-Transparent-Background.png'></SmallCard>
      
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    width: Dimensions.get("window").width,
    height: 150,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

})