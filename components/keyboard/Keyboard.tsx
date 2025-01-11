import { View, Text } from "react-native";
import React from "react";
import Key, { NoteType } from "../key/Key";

const notes: NoteType[] = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];
export default function Keyboard() {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      {notes.map((key, index) => {
        return <Key key={key} note={key} index={index} />;
      })}
    </View>
  );
}
