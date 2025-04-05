import { ScrollView } from "react-native";
import React from "react";
import Key from "../key/Key";
import { NoteType } from "../key/Key.types";

const notes: NoteType[] = [
  "C3",
  "Db3",
  "D3",
  "Eb3",
  "E3",
  "F3",
  "Gb3",
  "G3",
  "Ab3",
  "A3",
  "Bb3",
  "B3",
  "C4",
  "Db4",
  "D4",
  "Eb4",
  "E4",
  "F4",
  "Gb4",
  "G4",
  "Ab4",
  "A4",
  "Bb4",
  "B4",
  "C5",
];
export default function Keyboard() {
  return (
    <ScrollView style={{ flex: 1, width: "100%" }}>
      {notes.map((key, index) => {
        return <Key key={key} note={key} index={index} />;
      })}
    </ScrollView>
  );
}
