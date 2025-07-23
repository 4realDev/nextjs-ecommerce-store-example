'use client';

import classes from './QuantityControls.module.css';

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
			<button
				className={classes.quantityButton}
				onClick={(e) => {
					e.stopPropagation();
					onIncreaseAction(item);
				}}>
				+
			</button>
			<span className={classes.quantity}>{quantity}</span>
			<button
				className={classes.quantityButton}
				onClick={(e) => {
					e.stopPropagation();
					onDecreaseAction(item);
				}}>
				-
			</button>
		</div>
	);
};
