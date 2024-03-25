import { ReactElement, createElement } from "react";
import { twMerge } from "tailwind-merge";

import { TYPOGRAPHY_VARIANTS } from "./const";
import { TypographyElements, TypographyProps } from "./type";

export const Typography = <Element extends TypographyElements>({
  as,
  variant,
  size,
  className,
  children,
  ...props
}: TypographyProps<Element>): ReactElement => {
  return createElement(
    as,
    {
      ...props,
      className: twMerge(TYPOGRAPHY_VARIANTS({ variant, size }), className),
    },
    children
  );
};
