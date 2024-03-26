import clsx from "clsx";
import { tv } from "tailwind-variants";

export const TEXT_FIELD_VARIANTS = tv({
  base: clsx(
    "mg-rounded-md mg-border",
    "disabled:mg-bg-gray-50 disabled:mg-text-gray-600",
    "disabled:mg-cursor-not-allowed",

    "dark:mg-text-white dark:mg-caret-white",
    "dark:disabled:mg-bg-gray-600-alpha dark:disabled:mg-text-gray-300"
  ),
  variants: {
    background: {
      fill: clsx("mg-bg-white dark:mg-bg-gray-900"),
      ghost: clsx("mg-bg-transparent"),
    },
    outline: {
      blue: clsx("mg-focus-outline-blue"),
      yellow: clsx("mg-focus-outline-yellow"),
    },
    size: {
      sm: clsx("mg-text-sm", "mg-p-3"),
      md: clsx("mg-text-md", "mg-px-3 mg-py-4"),
    },
    error: {
      true: clsx("mg-border-red-800"),
      false: clsx("mg-border-gray-300", "dark:mg-border-gray-400-alpha"),
    },
  },
});
