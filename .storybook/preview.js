import React from "react";

import { addDecorator } from "@storybook/react";

import EmotionThemeProvider from "./theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
