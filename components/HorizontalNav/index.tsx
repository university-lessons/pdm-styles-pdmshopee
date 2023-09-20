import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import IconButton from "./IconButton";

export default function index() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <View style={[styles.line]}>
            <IconButton style={styles.icon} iconName={"dollar"} iconText="Moedas"></IconButton>
            <IconButton style={styles.icon} iconName={"dollar"} iconText="Moedas"></IconButton>
            <IconButton style={styles.icon} iconName={"dollar"} iconText="Moedas"></IconButton>
            <IconButton style={styles.icon} iconName={"dollar"} iconText="Moedas"></IconButton>
            <IconButton style={styles.icon} iconName={"dollar"} iconText="Moedas"></IconButton>
          </View>

          <View style={styles.line}>
            <IconButton iconName={"dollar"} iconText="Moedas"></IconButton>
            <IconButton iconName={"dollar"} iconText="Moedas"></IconButton>
            <IconButton iconName={"dollar"} iconText="Moedas"></IconButton>
            <IconButton iconName={"dollar"} iconText="Moedas"></IconButton>
            <IconButton iconName={"dollar"} iconText="Moedas"></IconButton>
            <IconButton iconName={"dollar"} iconText="Moedas"></IconButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
  },
  line: {
    flexGrow: 1,
    flexDirection: "row",
  },

  icon: {
    backgroundColor: "white",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
