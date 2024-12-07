import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Keyboard from "./components/keyboard/Keyboard";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Keyboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
