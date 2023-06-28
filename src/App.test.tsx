import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello Terence welcome message", () => {
  render(<App />);
  const linkElement = screen.getByText(/Terence/i);
  expect(linkElement).toBeInTheDocument();
});
