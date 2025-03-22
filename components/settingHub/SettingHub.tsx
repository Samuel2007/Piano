import { View, StyleSheet } from "react-native";
import React from "react";
import OctaveAmountChanger from "./components/OctaveAmountChanger";

const SettingHub = () => {
  return (
    <View style={styles.container}>
      <OctaveAmountChanger />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: 100,
    backgroundColor: "#4A4A4A",
  },
});

export default SettingHub;
