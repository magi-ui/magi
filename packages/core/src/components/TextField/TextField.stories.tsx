import { TextField } from "./TextField";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextField> = {
  component: TextField,
  argTypes: {
    background: {
      options: ["fill", "ghost"],
      control: { type: "select" },
    },
    outline: {
      options: ["blue", "yellow"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
  },
  args: {
    background: "fill",
    outline: "blue",
    size: "sm",
    disabled: false,
    error: false,
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Base: Story = {};
