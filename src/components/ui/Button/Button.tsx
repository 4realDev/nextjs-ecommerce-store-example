// Generic Button Component
// Native: extends ButtonHTMLAttributes<HTMLButtonElement>
// Accessible: aria-*, type, form, tabIndex
// Composable and Design-system friendly
// Best Practise:
// - use native "onClick" which doesn't have to be passed, because it is already extended by ButtonHTMLAttributes
// - use "disabled" prop, uses composition
// - pass children prop instead of buttonText to allow more flexibility for button content
// - built-in styling variants instead of isLight flag to control button styles and standardize behavior

"use client";

import React, {
  ButtonHTMLAttributes,
  MouseEvent,
  CSSProperties,
  ReactNode,
} from "react";
import styles from "./Button.module.css";
import cn from "classnames";

export type ButtonVariant = "light" | "dark";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  centerText?: boolean;
  stopPropagation?: boolean;
  className?: string;
  style?: CSSProperties;
};

const Button = ({
  variant = "dark",
  icon,
  iconPosition = "left",
  centerText = true,
  stopPropagation = true,
  className,
  disabled,
  onClick,
  children,
  type = "button",
  ...rest
}: ButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (stopPropagation) e.stopPropagation();
    onClick?.(e);
  };
  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={cn(styles[`button__${variant}`], [styles["button"]], {
        [styles.iconOnly]: !children && icon,
        className,
      })}>
      {icon && iconPosition === "left" && (
        <div className={styles.icon}>{icon}</div>
      )}
      {children && (
        <span
          className={styles.text}
          style={{ justifyContent: centerText ? "center" : "flex-start" }}>
          {children}
        </span>
      )}
      {icon && iconPosition === "right" && (
        <div className={styles.icon}>{icon}</div>
      )}
    </button>
  );
};

export default Button;
