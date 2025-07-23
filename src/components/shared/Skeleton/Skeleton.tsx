import React from 'react';
import classes from './Skeleton.module.css';

type SkeletonProps = {
	iconSize?: number;
	icon?: React.ReactNode;
	height: number;
	width: number;
	backgroundColor?: string;
	borderRadius?: number;
};

export const Skeleton = ({
	iconSize,
	icon,
	height,
	width,
	backgroundColor = '#d1d5db',
	borderRadius = 2,
}: SkeletonProps) => {
	return (
		<div
			role='status'
			className={classes.loadingSkeleton}>
			<div
				className={classes.imagePlaceholder}
				style={{
					height: `${height}px`,
					width: `${width}px`,
					fontSize: `${iconSize}px`,
					backgroundColor: backgroundColor,
					borderRadius: `${borderRadius}px`,
				}}>
				{icon && icon}
			</div>
		</div>
	);
};
