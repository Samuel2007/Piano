import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Audio } from "expo-av";

type KeyProps = {
  note: string;
  index: number;
};

const getNotePath = (note: string) => {
  switch (note) {
    case "C":
      return require(`../../assets/pianoNotes/C6.mp3`);
    case "Db":
      return require(`../../assets/pianoNotes/Db6.mp3`);
    case "D":
      return require(`../../assets/pianoNotes/D6.mp3`);
    default:
      return require(`../../assets/pianoNotes/E6.mp3`);
  }
};

const Key = ({ note, index }: KeyProps) => {
  const isBlackKey = note.includes("b");

  function getTopOffeset(note: string) {
    if (isBlackKey) {
      switch (index) {
        case 1:
          return 75;
        case 3:
          return 175;
        case 6:
          return 375;
        case 8:
          return 475;
        case 10:
          return 575;
      }
    }
    return 1000;
  }

  const styles = getStyles(getTopOffeset(note)); // 70 -> topOffset
  const [sound, setSound] = useState<Audio.Sound>();
  console.log(note);
  async function playSound() {
    console.log("Loading Sound");

    const { sound } = await Audio.Sound.createAsync(getNotePath(note), {
      shouldPlay: true,
    });
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  const onPressInHandler = () => {
    playSound();
  };

  const onPressOutHandler = () => {
    console.log("stop playing note");
  };

  return (
    <TouchableOpacity
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      style={isBlackKey ? styles.blackKey : styles.whiteKey}
      testID={note}
    />
  );
};

export default Key;

const getStyles = (topOffset: number) =>
  StyleSheet.create({
    whiteKey: {
      height: 100,
      borderWidth: 1,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
    },
    blackKey: {
      position: "absolute",
      top: topOffset,
      height: 50,
      left: 100,
      width: 500,
      borderWidth: 1,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
    },
  });
