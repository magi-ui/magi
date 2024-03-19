import { ReactElement, createElement } from "react";
import { twMerge } from "tailwind-merge";

import { TYPOGRAPHY_VARIANTS } from "./const";
import { TypographyElements, TypographyProps } from "./type";

export const Typography = <Element extends TypographyElements>({
  as,
  theme,
  size,
  className,
  children,
  ...props
}: TypographyProps<Element>): ReactElement => {
  return createElement(
    as,
    {
      ...props,
      className: twMerge(TYPOGRAPHY_VARIANTS({ theme, size }), className),
    },
    children
  );
};
