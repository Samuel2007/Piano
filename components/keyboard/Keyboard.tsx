import { ScrollView } from "react-native";
import React from "react";
import Key from "../key/Key";
import { NoteType } from "../key/Key.types";
import { useOctaveContext } from "../../contexts/OctaveContext";

const getNotes = (currentOctave: number) => {
  return [
    `C${currentOctave}`,
    `Db${currentOctave}`,
    `D${currentOctave}`,
    `Eb${currentOctave}`,
    `E${currentOctave}`,
    `F${currentOctave}`,
    `Gb${currentOctave}`,
    `G${currentOctave}`,
    `Ab${currentOctave}`,
    `A${currentOctave}`,
    `Bb${currentOctave}`,
    `B${currentOctave}`,
    `C${currentOctave + 1}`,
    `Db${currentOctave + 1}`,
    `D${currentOctave + 1}`,
    `Eb${currentOctave + 1}`,
    `E${currentOctave + 1}`,
    `F${currentOctave + 1}`,
    `Gb${currentOctave + 1}`,
    `G${currentOctave + 1}`,
    `Ab${currentOctave + 1}`,
    `A${currentOctave + 1}`,
    `Bb${currentOctave + 1}`,
    `B${currentOctave + 1}`,
    `C${currentOctave + 2}`,
  ];
};

export default function Keyboard() {
  const { currentOctave } = useOctaveContext();
  const notes = getNotes(currentOctave);

  console.log("Notes:", notes);
  return (
    <ScrollView style={{ flex: 1, width: "100%" }}>
      {notes.map((key, index) => {
        return <Key key={key} note={key} index={index} />;
      })}
    </ScrollView>
  );
}
