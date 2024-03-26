import { TextArea } from "./TextArea";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
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
    resize: {
      options: ["both", "horizontal", "vertical", "none"],
      control: { type: "select" },
    },
  },
  args: {
    background: "fill",
    outline: "blue",
    size: "sm",
    disabled: false,
    error: false,
    placeholder: "テキストを入力してください",
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Base: Story = {};
