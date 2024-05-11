import React from "react";
import { render, screen } from "@testing-library/react-native";
import Key from "./Key";

test("should render Key text on the screen", () => {
  render(<Key />);

  const key = screen.getByText("Key");
  expect(key).toBeOnTheScreen();
});
