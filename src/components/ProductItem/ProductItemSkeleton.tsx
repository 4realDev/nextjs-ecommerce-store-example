import React from 'react';
import { Skeleton } from '../ui/Skeleton/Skeleton';
import classes from './ProductItem.module.css';
import classesButton from '../ui/Button/Button.module.css';

export const ProductItemSkeleton = ({ key }: { key: number }) => {
	return (
		<li
			className={classes.productItem}
			key={key}>
			<div className={classes.productTitle}>
				<Skeleton>John Hardy Women&apos;s Legends</Skeleton>
			</div>
			<div className={classes.productImageContainer}>
				<Skeleton style={{ width: '100%', height: '100%' }}>
					<div className={classes.productImage} />
				</Skeleton>
			</div>
			<div className={classes.productPrice}>
				<Skeleton>Price: CHF 999.99</Skeleton>
			</div>

			{/* Add to Cart Button */}
			<Skeleton style={{ width: '100%' }}>
				<button className={classesButton.button}>
					<span className={classesButton.buttonText}>Add to Cart</span>
				</button>
			</Skeleton>
		</li>
	);
};
