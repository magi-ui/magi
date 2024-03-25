import { ComponentProps } from "react";
import { VariantProps } from "tailwind-variants";

import { BUTTONBASE_VARIANTS } from "./const";

export type ButtonBaseVariants = VariantProps<typeof BUTTONBASE_VARIANTS> & {
  variant?: "fill" | "outline" | "ghost";
};
export type ButtonBaseProps = ComponentProps<"span"> & ButtonBaseVariants;
