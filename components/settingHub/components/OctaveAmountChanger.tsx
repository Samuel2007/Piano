import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { RadioButton } from "./RadioButton";
import { useOctaveAmountContext } from "../../../contexts/OctaveAmountContext";

const OctaveAmountChanger = () => {
  const { octaves, currentOctave, setCurrentOctave } = useOctaveAmountContext();
  console.log(currentOctave);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Octaves:</Text>
      <RadioButton
        options={octaves}
        selectedOption={currentOctave}
        onSelect={(option) => setCurrentOctave(option)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 30,
    transform: [{ rotate: "90deg" }],
  },
  text: {
    color: "white",
  },
});

export default OctaveAmountChanger;
