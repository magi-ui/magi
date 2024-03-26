import clsx from "clsx";
import { tv } from "tailwind-variants";

export const BUTTON_VARIANTS = tv({
  base: clsx("mg-transition-all"),
  variants: {
    pill: {
      true: clsx("mg-rounded-full"),
      false: clsx("mg-rounded-md"),
    },
    outline: {
      blue: clsx("mg-focus-outline-blue"),
      yellow: clsx("mg-focus-outline-yellow"),
    },
  },
});
