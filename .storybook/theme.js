import React from "react";
import { ThemeProvider } from "emotion-theming";

const darkMode = {
  colors: {
    background: "black",
    primary: "white",
    secondary: "blue",
    toto: "red",
  },
};

const lightMode = {
  colors: {
    background: "white",
    primary: "black",
    secondary: "blue",
    toto: "red",
  },
};

export const LightProvider = (props) => (
  <ThemeProvider theme={lightMode} {...props} />
);

export const DarkProvider = (props) => (
  <ThemeProvider theme={darkMode} {...props} />
);
