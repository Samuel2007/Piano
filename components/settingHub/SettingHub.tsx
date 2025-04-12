import { View, StyleSheet } from "react-native";
import React from "react";
import OctaveAmountChanger from "./components/OctaveAmountChanger";
import OctaveChanger from "./components/OctaveChanger";

const SettingHub = () => {
  return (
    <View style={styles.container}>
      <OctaveAmountChanger />
      {/* <OctaveChanger /> */}
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
