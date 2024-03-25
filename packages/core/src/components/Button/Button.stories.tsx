import { actions } from "@storybook/addon-actions";

import ButtonBaseMeta from "../ButtonBase/ButtonBase.stories";

import { Button } from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    ...ButtonBaseMeta.argTypes,
    outline: {
      options: ["blue", "yellow"],
      control: { type: "select" },
    },
  },
  args: {
    size: "md",
    children: "ラベル",
    color: "blue",
    outline: "blue",
    onClick: () => actions("clicked!"),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {};
