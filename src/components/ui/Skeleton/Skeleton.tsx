import * as React from 'react';
import skeletonStyles from './skeleton.module.css';
import cn from 'classnames';

// TODO: Add maybe full-width and full-height props to Skeleton component

function Skeleton({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			role='status'
			className={cn(skeletonStyles.skeleton, className ?? '')}
			{...props}>
			<div className={skeletonStyles.reserveSpaceAndHide}>{children}</div>
			{/* Screen reader only text for accessibility */}
			<span className={skeletonStyles.srOnly}>Loading...</span>
		</div>
	);
}

export { Skeleton };
