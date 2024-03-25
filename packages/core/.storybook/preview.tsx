import type { Preview } from "@storybook/react";
import "../src/magi.css";
import React from "react";
import clsx from "clsx";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "twitter",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#101010",
        },
      ],
    },
  },
  globalTypes: {
    darkMode: {
      defaultValue: false, // Enable dark mode by default on all stories
    },
    // Optional (Default: 'dark')
    className: {
      defaultValue: "mg-dark",
    },
  },
  decorators: [(Story) => <Story />],
};

export default preview;
