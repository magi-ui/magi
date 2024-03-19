import { ComponentProps } from "react";
import { VariantProps } from "tailwind-variants";

import { TYPOGRAPHY_VARIANTS } from "./const";

export type TypographyElements = Extract<
  keyof JSX.IntrinsicElements,
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "address"
  | "big"
  | "small"
  | "b"
  | "i"
  | "s"
  | "u"
  | "tt"
  | "strong"
  | "code"
>;

export type TypographyProps<Element extends TypographyElements> = {
  as: Element;
} & ComponentProps<Element> &
  VariantProps<typeof TYPOGRAPHY_VARIANTS>;
