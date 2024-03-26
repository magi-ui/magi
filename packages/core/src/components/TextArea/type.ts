import { ComponentProps } from "react";
import { VariantProps } from "tailwind-variants";

import { TEXT_AREA_VARIANTS } from "./const";

import { PartialRequired } from "@/types/util";

export type TextAreaProps = PartialRequired<
  ComponentProps<"textarea">,
  "required" | "aria-describedby"
> &
  VariantProps<typeof TEXT_AREA_VARIANTS>;
