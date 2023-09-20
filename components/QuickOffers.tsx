import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import NumberSign from "./QuickOffers/OfferSign";
import Placeholder from "./QuickOffers/Placeholder";

export default function QuickOffers() {
  const [offers, setOffers] = useState([1, 2]);
  return (
    <View style={styles.container}>
      <View style={styles.container_line}>
        <View style={styles.container_line}>
          <Text style={styles.offer_text}>OFERTAS RELÂMPAGOS</Text>
          <NumberSign></NumberSign>
        </View>
        <View>
          <Text style={styles.see_more_txt}>Ver Mais &gt;</Text>
        </View>
      </View>

      <View style={styles.offers_line}>
        {offers.map((r, index) => (
          <Placeholder key={index}></Placeholder>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  offer_text: {
    color: "red",
  },
  container_line: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  offers_line: {
    marginTop: 12,
    flexDirection: "row",
  },
  see_more_txt: {
    opacity: 0.5,
  },
});
