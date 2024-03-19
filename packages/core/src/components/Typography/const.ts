import clsx from "clsx";
import { tv } from "tailwind-variants";

export const TYPOGRAPHY_VARIANTS = tv({
  base: clsx("mg-transition-all"),
  variants: {
    theme: {
      body: clsx("mg-text-gray-900"),
      description: clsx("mg-text-gray-700"),
      placeholder: clsx("mg-text-gray-600"),
      fill: clsx("mg-text-gray-50"),
      link: clsx(
        "mg-text-blue-800",
        "visited:mg-text-blue-900 hover:mg-text-blue-900 active:mg-text-blue-900"
      ),
      alert: clsx("mg-text-red-700"),
      disabled: clsx("mg-text-gray-500"),
    },
    size: {
      xs: clsx("mg-text-xs mg-leading-xs mg-tracking-xs"),
      sm: clsx("mg-text-sm mg-leading-sm mg-tracking-sm"),
      md: clsx("mg-text-md mg-leading-md mg-tracking-md"),
      lg: clsx("mg-text-lg mg-leading-lg mg-tracking-lg"),
      xl: clsx("mg-text-xl mg-leading-xl mg-tracking-xl"),
      "2xl": clsx("mg-text-2xl mg-leading-2xl mg-tracking-2xl"),
      "3xl": clsx("mg-text-3xl mg-leading-3xl mg-tracking-3xl"),
      "4xl": clsx("mg-text-4xl mg-leading-4xl mg-tracking-4xl"),
    },
    portional: {
      true: clsx("mg-proportional"),
      false: clsx(""),
    },
  },
});
