import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

type KeyProps = {
  note: string;
  index: number;
};

const Key = ({ note, index }: KeyProps) => {
  const isBlackKey = note.includes("#");

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

  return (
    <View
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
