import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export type NoteType =
  | "C"
  | "Db"
  | "D"
  | "Eb"
  | "E"
  | "F"
  | "Gb"
  | "G"
  | "Ab"
  | "A"
  | "Bb"
  | "B";

type KeyProps = {
  note: string;
  index: number;
  key: string;
};

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
  const [sound, setSound] = useState<Audio.Sound>();
  const [activeTouches, setActiveTouches] = useState<{
    [key: string]: boolean;
  }>({});

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

  const styles = getStyles(getTopOffeset(note));

  useEffect(() => {
    setKeySound();
    return () => {
      sound?.unloadAsync();
    };
  }, []);

  const setKeySound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(getNotePath(note), {
        shouldPlay: false,
        progressUpdateIntervalMillis: 0,
      });
      setSound(sound);
    } catch (error) {
      console.error("Error loading sound:", error);
    }
  };

  async function playSound() {
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.setPositionAsync(0);
        await sound.playAsync();
      }
    } catch (error) {
      console.error("Error playing sound:", error);
      await setKeySound();
    }
  }

  const handleTouches = (event: any, isPressing: boolean) => {
    const touches = event.allTouches.map((touch: any) => ({
      id: touch.id,
      x: touch.absoluteX,
      y: touch.absoluteY,
    }));

    const updatedTouches: { [key: string]: boolean } = {};
    touches.forEach(({ id }: { id: string }) => {
      updatedTouches[id] = true;
      if (isPressing && !activeTouches[id]) {
        playSound();
      }
    });

    setActiveTouches(isPressing ? updatedTouches : {});
  };

  const gesture = Gesture.Pan()
    .onTouchesDown((event) => handleTouches(event, true))
    .onTouchesMove((event) => handleTouches(event, true))
    .onTouchesUp(() => setActiveTouches({}));

  return (
    <GestureDetector gesture={gesture}>
      <View
        style={[
          isBlackKey ? styles.blackKey : styles.whiteKey,
          Object.keys(activeTouches).length > 0 && styles.pressedKey,
        ]}
        testID={note}
      />
    </GestureDetector>
  );
};

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
    pressedKey: {
      backgroundColor: "#ddd",
    },
  });

export default Key;
