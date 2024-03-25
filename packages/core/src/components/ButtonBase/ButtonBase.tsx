import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { BUTTONBASE_VARIANTS } from "./const";
import { ButtonBaseProps } from "./type";

export const ButtonBase = forwardRef<HTMLSpanElement, ButtonBaseProps>(
  (
    {
      children,
      className,
      size = "md",
      color = "gray",
      variant = "fill",
      pill = false,
      ...props
    },
    ref
  ) => {
    return (
      <span
        {...props}
        ref={ref}
        className={twMerge(
          BUTTONBASE_VARIANTS({ size, color, pill }),
          variant,
          className
        )}
      >
        {children}
      </span>
    );
  }
);
