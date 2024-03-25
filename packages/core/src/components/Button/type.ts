import { ComponentProps } from "react";
import { VariantProps } from "tailwind-variants";

import { ButtonBaseVariants } from "../ButtonBase/type";

import { BUTTON_VARIANTS } from "./const";

export type ButtonVariants = VariantProps<typeof BUTTON_VARIANTS>;

export type ButtonProps = ComponentProps<"button"> &
  ButtonBaseVariants &
  ButtonVariants;
