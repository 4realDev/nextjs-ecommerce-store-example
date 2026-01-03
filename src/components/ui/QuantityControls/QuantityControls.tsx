"use client";

import Button from "../Button/Button";
import classes from "./QuantityControls.module.css";

type QuantityControlsProps<T> = {
  quantity: number;
  item: T;
  onIncreaseAction: (item: T) => void;
  onDecreaseAction: (item: T) => void;
};

export const QuantityControls = <T,>({
  quantity,
  item,
  onIncreaseAction,
  onDecreaseAction,
}: QuantityControlsProps<T>) => {
  return (
    <div className={classes.quantityActions}>
      <Button
        onClick={() => {
          onIncreaseAction(item);
        }}
        style={{ width: "40px" }}>
        +
      </Button>
      {/* suppressHydrationWarning because data is first rendered with initial 0, then updated afterwards from localStorage */}
      <span
        className={classes.quantity}
        suppressHydrationWarning>
        {quantity}
      </span>

      <Button
        onClick={() => {
          onDecreaseAction(item);
        }}
        style={{ width: "40px" }}>
        -
      </Button>
    </div>
  );
};
