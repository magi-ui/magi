import { ButtonBase } from "./ButtonBase";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonBase> = {
  component: ButtonBase,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "select" },
    },
    color: {
      options: [
        "blue",
        "green",
        "red",
        "yellow",
        "lime",
        "orange",
        "purple",
        "gray",
      ],
      control: { type: "select" },
    },
    variant: {
      options: ["fill", "outline", "ghost"],
      control: { type: "select" },
    },
    pill: {
      control: { type: "boolean" },
    },
    children: {
      type: "string",
    },
  },
  args: {
    size: "md",
    children: "ラベル",
    color: "blue",
  },
};

export default meta;
type Story = StoryObj<typeof ButtonBase>;

export const Base: Story = {};
