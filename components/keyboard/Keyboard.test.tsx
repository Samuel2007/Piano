import React from "react";
import { render, screen } from "@testing-library/react-native";
import Keyboard from "./Keyboard";

test.each(["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"])(
  "should always be 12 notes visible on screen",
  (note) => {
    render(<Keyboard />);
    const key = screen.getByTestId(note);
    expect(key).toBeOnTheScreen();
  }
);
