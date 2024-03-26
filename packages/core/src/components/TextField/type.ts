import { ComponentProps } from "react";
import { VariantProps } from "tailwind-variants";

import { TEXT_FIELD_VARIANTS } from "./const";

import { PartialRequired } from "@/types/util";

export type TextFieldProps = PartialRequired<
  ComponentProps<"input">,
  "required" | "aria-describedby"
> &
  VariantProps<typeof TEXT_FIELD_VARIANTS>;
