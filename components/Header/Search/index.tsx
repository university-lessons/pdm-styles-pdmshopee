import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useState } from "react";
import IconButton from "./IconButton";

export default function Search() {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    console.log("Search for:", value);
  };

  return (
    <View style={styles.container}>
      <IconButton iconName="search1" onPress={handleSearch} />

      <TextInput style={styles.input} value={value} onChangeText={setValue} />

      <IconButton iconName="camerao" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    width: "60%",
    top: 40,
    height: 48,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flexGrow: 1,
  },
});
