import { View, Text, StyleSheet } from "react-native";
import React from "react";

type KeyProps = {
  note: string;
};

const Key = ({ note }: KeyProps) => {
  return (
    <View style={styles.container}>
      <Text>{note}</Text>
    </View>
  );
};

export default Key;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
