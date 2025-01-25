import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import Key from "./Key";

test("should render white Key on screen if note prop doesn't contain b", () => {
  const note = "C";
  render(<Key key={note} note={note} index={0} />);

  const key = screen.getByTestId(note);
  expect(key).toHaveStyle({ backgroundColor: "white" });
});

test("should render black Key on screen if note prop contains b", () => {
  const note = "Db";
  render(<Key key={note} note={note} index={0} />);
  const key = screen.getByTestId(note);
  expect(key).toHaveStyle({ backgroundColor: "black" });
});
