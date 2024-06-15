import { View, Text } from "react-native";
import React from "react";
import Key from "../key/Key";

const notes = ["C", "D", "E", "F", "G", "A", "B", "C"];
export default function Keyboard() {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      {notes.map((key) => {
        return <Key note={key} />;
      })}
    </View>
  );
}
