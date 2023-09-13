import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import HorizontalNav from "../components/HorizontalNav";
import FeaturedItems from "../components/FeaturedItems";
import QuickOffers from "../components/QuickOffers";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <HorizontalNav />
      <FeaturedItems />
      <QuickOffers />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
