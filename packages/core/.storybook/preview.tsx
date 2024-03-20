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
  decorators: [
    (Story) => (
      <div
        className={clsx(
          "mg-bg-white",
          "dark:mg-bg-gray-900",
          "mg-p-4 mg-rounded-lg mg-overflow-hidden"
        )}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
