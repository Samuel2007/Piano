import { StyleSheet } from "react-native";
export const getStyles = (topOffset: number) =>
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
    twoOcatvesWhiteKey: {
      height: 50,
    },
    twoOcatvesBlackKey: {
      height: 25,
    },
    text: {
      transform: [{ rotate: "90deg" }],
      marginRight: 150,
      color: "#9DE9EB",
    },
  });
