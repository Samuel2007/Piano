import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";

type KeyProps = {
  note: string;
  index: number;
  key: string;
};

// @REVIEW: `note` could be a string literal type (which would be more precise)
const getNotePath = (note: string) => {
  switch (note) {
    case "C":
      return require(`../../assets/pianoNotes/C6.mp3`);
    case "Db":
      return require(`../../assets/pianoNotes/Db6.mp3`);
    case "D":
      return require(`../../assets/pianoNotes/D6.mp3`);
    case "Eb":
      return require(`../../assets/pianoNotes/Eb6.mp3`);
    case "E":
      return require(`../../assets/pianoNotes/E6.mp3`);
    case "F":
      return require(`../../assets/pianoNotes/F6.mp3`);
    case "Gb":
      return require(`../../assets/pianoNotes/Gb6.mp3`);
    case "G":
      return require(`../../assets/pianoNotes/G6.mp3`);
    case "Ab":
      return require(`../../assets/pianoNotes/Ab6.mp3`);
    case "A":
      return require(`../../assets/pianoNotes/A6.mp3`);
    case "Bb":
      return require(`../../assets/pianoNotes/Bb6.mp3`);
    case "B":
      return require(`../../assets/pianoNotes/B6.mp3`);
    case "C":
      return require(`../../assets/pianoNotes/C7.mp3`);

    default:
      return require(`../../assets/pianoNotes/E6.mp3`);
  }
};

const Key = ({ note, index }: KeyProps) => {
  const isBlackKey = note.includes("b");

  // @REVIEW: typo in getTopOffeset (-> getTopOffset)
  // @REVIEW: unused `note` variable
  // @REVIEW: the offset calculation could be done algorithmically
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
  // const [sound2, setSound2] = useState<Audio.Sound>();

  const setKeySound = async () => {
    const { sound } = await Audio.Sound.createAsync(getNotePath(note), {
      shouldPlay: false,
    });
    setSound(sound);
  };

  // const setKeySound2 = async () => {
  //   const { sound: sound2 } = await Audio.Sound.createAsync(getNotePath("D"), {
  //     shouldPlay: false,
  //   });
  //   setSound2(sound2);
  // };

  useEffect(() => {
    console.log("useEffect");
    // check how many times useEffect is called

    setKeySound();
  }, []);

  // make more keys play in the same time
  async function playSound() {
    console.log(sound);
    if (sound) {
      sound.replayAsync();

      // setKeySound();
    }
  }

  const onPressInHandler = () => {
    playSound();
  };

  const onPressOutHandler = () => {};

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
