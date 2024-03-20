import clsx from "clsx";

import { Typography } from "./Typography";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  component: Typography,
  argTypes: {
    as: {
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "address",
        "big",
        "small",
        "b",
        "i",
        "s",
        "u",
        "tt",
        "strong",
        "code",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
      control: { type: "select" },
    },
    theme: {
      options: [
        "body",
        "description",
        "placeholder",
        "fill",
        "link",
        "alert",
        "disabled",
      ],
    },
    children: {
      type: "string",
    },
  },
  args: {
    as: "p",
    theme: "body",
    children:
      "私は今日恐らくその活動隊というのの以上をしですず。何しろ場合で安心方はとうていこの留学でたかもがしでみだろへは答弁威張っでたながら、全くには解らなんたた。主義に申し上げうものももっともほかが何しろましですな。ちょうど大森さんの発展なおのこと多少用意に悟っで去就どんな事業そこか病気にという実留学なかっですたませと、そのその間は私か世間個人にいうて、岡田さんののに国家のそれがもうご専攻と待っから私天然にご教育で買うようにのらくら大所有をしでですので、万とうとう希望に詰めですがっうものをすまですです。しかしながらすなわちお根本を折っ事は全く高等とさでば、その元にしか片づけますばという自信に出るて来うない。",
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Base: Story = {
  render: (args) => <Typography {...args} />,
};

export const Override: Story = {
  render: (args) => (
    <Typography {...args} className={clsx("mg-font-medium mg-underline")} />
  ),
};
