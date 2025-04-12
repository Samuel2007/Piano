import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const OctaveChanger = () => {
  const [octaveAmount, setoctaveAmount] = React.useState(3); // Default octave

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log("Octave Down Pressed");
        }}
      >
        <Image
          style={styles.arrowLeft}
          source={require("../../../assets/arrow.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("Octave Up Pressed");
        }}
      >
        <Image
          style={styles.arrowRight}
          source={require("../../../assets/arrow.png")}
          resizeMode="contain"
        />
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
    transform: [{ rotate: "270deg" }],
    width: 100,
    height: 40,
  },
  arrowRight: {
    transform: [{ rotate: "90deg" }],
    width: 100,
    height: 40,
    marginTop: 550,
  },
});

export default OctaveChanger;
