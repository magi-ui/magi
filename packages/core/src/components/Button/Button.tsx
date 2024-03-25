import { forwardRef } from "react";

import { ButtonBase } from "../ButtonBase";

import { BUTTON_VARIANTS } from "./const";
import { ButtonProps } from "./type";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      color,
      pill,
      variant,
      outline = "blue",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        className={BUTTON_VARIANTS({ pill, outline })}
        ref={ref}
      >
        <ButtonBase
          size={size}
          color={color}
          pill={pill}
          variant={variant}
          className={className}
        >
          {children}
        </ButtonBase>
      </button>
    );
  }
);
