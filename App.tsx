import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Keyboard from "./components/keyboard/Keyboard";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SettingHub from "./components/settingHub/SettingHub";

export default function App() {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Keyboard />
        <SettingHub />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
