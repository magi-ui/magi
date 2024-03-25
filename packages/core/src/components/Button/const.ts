import clsx from "clsx";
import { tv } from "tailwind-variants";

export const BUTTON_VARIANTS = tv({
  base: clsx(
    "mg-outline-none mg-ring-[2.8px] mg-ring-transparent",
    "mg-transition-all"
  ),
  variants: {
    pill: {
      true: clsx("mg-rounded-full"),
      false: clsx("mg-rounded-md"),
    },
    outline: {
      blue: clsx("focus:mg-ring-blue-500"),
      yellow: clsx("focus:mg-ring-yellow-700"),
    },
  },
});
