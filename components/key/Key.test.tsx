import React from "react";
import { render, screen } from "@testing-library/react-native";
import Key from "./Key";

test("should render white Key on screen if note prop doesn't contain #", () => {
  const note = "C";
  render(<Key note={note} index={0} />);

  const key = screen.getByTestId(note);
  expect(key).toHaveStyle({ backgroundColor: "white" });
});

test("should render black Key on screen if note prop contains #", () => {
  const note = "C#";
  render(<Key note={note} index={0} />);
  const key = screen.getByTestId(note);
  expect(key).toHaveStyle({ backgroundColor: "black" });
});
