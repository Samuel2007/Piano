import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface RadioButtonProps {
  options: number[];
  selectedOption: number;
  onSelect: (option: number) => void;
}

export const RadioButton = ({
  options,
  selectedOption,
  onSelect,
}: RadioButtonProps) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.optionContainer}
          onPress={() => onSelect(option)}
        >
          <View style={styles.outer}>
            {selectedOption === option && <View style={styles.inner} />}
          </View>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  outer: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: "black",
  },
  optionText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
});
