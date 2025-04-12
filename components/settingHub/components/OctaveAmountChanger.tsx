import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { RadioButton } from "./RadioButton";
import { useOctaveContext } from "../../../contexts/OctaveContext";

const OctaveAmountChanger = () => {
  const { octaveAmount, currentOctave, setOctaveAmount } = useOctaveContext();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Octaves:</Text>
      <RadioButton
        options={[1, 2]}
        selectedOption={octaveAmount}
        onSelect={(option) => setOctaveAmount(option)}
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
