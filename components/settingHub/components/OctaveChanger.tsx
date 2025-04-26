import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useOctaveContext } from "../../../contexts/OctaveContext";

const OctaveChanger = () => {
  const { currentOctave, setCurrentOctave } = useOctaveContext();

  const onLeftPressHandler = () => {
    if (currentOctave > 0) {
      setCurrentOctave(currentOctave - 1);
    }
  };
  const onRightPressHandler = () => {
    if (currentOctave < 7) {
      setCurrentOctave(currentOctave + 1);
    }
  };

  console.log("Current Octave: ", currentOctave);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onLeftPressHandler}
        style={styles.touchableArrowLeft}
      >
        {currentOctave !== 0 ? (
          <Image
            style={styles.arrowLeft}
            source={require("../../../assets/arrow.png")}
            resizeMode="contain"
          />
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onRightPressHandler}
        style={styles.touchableArrowRight}
      >
        {currentOctave !== 7 ? (
          <Image
            style={styles.arrowRight}
            source={require("../../../assets/arrow.png")}
            resizeMode="contain"
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: -30,
    marginLeft: -60,
  },
  arrowLeft: {
    width: 100,
    height: 40,
  },
  arrowRight: {
    width: 100,
    height: 40,
  },
  touchableArrowLeft: {
    transform: [{ rotate: "270deg" }],
    width: 100,
    height: 40,
  },
  touchableArrowRight: {
    transform: [{ rotate: "90deg" }],
    width: 100,
    height: 40,
    marginTop: 550,
  },
});

export default OctaveChanger;
