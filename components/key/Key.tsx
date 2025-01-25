import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
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
  note: NoteType;
  index: number;
  key: string;
};

const getNotePath = (note: NoteType) => {
  switch (note) {
    case "C":
      return require(`../../assets/pianoNotes/C3.mp3`);
    case "Db":
      return require(`../../assets/pianoNotes/Db3.mp3`);
    case "D":
      return require(`../../assets/pianoNotes/D3.mp3`);
    case "Eb":
      return require(`../../assets/pianoNotes/Eb3.mp3`);
    case "E":
      return require(`../../assets/pianoNotes/E3.mp3`);
    case "F":
      return require(`../../assets/pianoNotes/F3.mp3`);
    case "Gb":
      return require(`../../assets/pianoNotes/Gb3.mp3`);
    case "G":
      return require(`../../assets/pianoNotes/G3.mp3`);
    case "Ab":
      return require(`../../assets/pianoNotes/Ab3.mp3`);
    case "A":
      return require(`../../assets/pianoNotes/A3.mp3`);
    case "Bb":
      return require(`../../assets/pianoNotes/Bb3.mp3`);
    case "B":
      return require(`../../assets/pianoNotes/B3.mp3`);
    case "C":
      return require(`../../assets/pianoNotes/C4.mp3`);

    default:
      return require(`../../assets/pianoNotes/E3.mp3`);
  }
};

const Key = ({ note, index }: KeyProps) => {
  const isBlackKey = note.includes("b");
  const [sound, setSound] = useState<Audio.Sound>();
  const [activeTouches, setActiveTouches] = useState<{
    [key: string]: boolean;
  }>({});

  const intervalRef = useRef<NodeJS.Timeout>();

  function getTopOffeset(note: NoteType) {
    if (isBlackKey) {
      const baseOffset = 75;
      const spacing = 50;
      let adjustedIndex = index;
      if (index > 5) adjustedIndex += 1;
      if (index > 10) adjustedIndex += 1;

      return baseOffset + (adjustedIndex - 1) * spacing;
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
        clearInterval(intervalRef.current);
        await sound.stopAsync();
        await sound?.setVolumeAsync(1);
        await sound.playAsync();

        // setTimeout(() => {
        //   sound.setPositionAsync(200);
        //   sound.setIsLoopingAsync(true);
        // }, 1000);
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
      } else {
        let volume = 1;
        intervalRef.current = setInterval(() => {
          console.log(volume);
          if (volume < 0) {
            clearInterval(intervalRef.current);
          }
          sound?.setVolumeAsync(volume);
          volume = volume - 0.1;
        }, 50);
      }
    });

    setActiveTouches(isPressing ? updatedTouches : {});
  };

  const gesture = Gesture.Pan()
    .onTouchesDown((event) => handleTouches(event, true))
    .onTouchesMove((event) => handleTouches(event, true))
    .onTouchesUp((event) => {
      // console.log("on touch up");
      // stop playing sound
      handleTouches(event, false);
      setActiveTouches({});
    });

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
