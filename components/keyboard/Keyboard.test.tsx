import React from "react";
import { render, screen } from "@testing-library/react-native";
import Keyboard from "./Keyboard";

test.each(["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"])(
  "should always be 12 notes visible on screen",
  (note) => {
    render(<Keyboard />);
    const key = screen.getByTestId(note);
    expect(key).toBeOnTheScreen();
  }
);
