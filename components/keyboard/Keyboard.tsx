import { View, Text } from "react-native";
import React from "react";
import Key from "../key/Key";

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
export default function Keyboard() {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      {notes.map((key, index) => {
        return <Key note={key} index={index} />;
      })}
    </View>
  );
}
