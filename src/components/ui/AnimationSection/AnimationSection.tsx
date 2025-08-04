import { useIntersectionObserver } from '@/hooks/useIntersectObserver';
import { PropsWithChildren, useMemo } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const transformMap: Record<Direction, string> = {
	up: 'translateY(30px)',
	down: 'translateY(-30px)',
	left: 'translateX(30px)',
	right: 'translateX(-30px)',
	none: 'translateY(0) translateX(0)',
};

type AnimationSectionProps = {
	direction?: Direction;
	delay?: number;
	duration?: number;
	threshold?: number;
	triggerOnce?: boolean;
	style?: React.CSSProperties;
	className?: string;
} & PropsWithChildren;

// Reusable AnimationSection component
export const AnimationSection = ({
	children,
	direction = 'up',
	delay = 0,
	duration = 500,
	threshold = 0.1,
	triggerOnce = true,
	style = {},
	className = '',
}: AnimationSectionProps) => {
	const { elementRef, hasIntersected, isIntersecting } = useIntersectionObserver({
		threshold,
	});

	// Determine if the element should animate based on triggerOnce
	// If triggerOnce is true, it will only animate once when it first comes into view -> hasIntersected will be true permanently
	// If triggerOnce is false, it will animate every time it comes into view -> isIntersecting will toggle based on visibility
	const shouldAnimate = triggerOnce ? hasIntersected : isIntersecting;

	// Use memoization to avoid recalculating styles on every render
	const styles = useMemo(() => {
		return {
			opacity: shouldAnimate ? 1 : 0,
			transform: shouldAnimate ? 'translateY(0) translateX(0)' : transformMap[direction],
			transition: `all ${duration}ms ease-out ${delay}ms`,
		};
	}, [shouldAnimate, direction, duration, delay]);

	return (
		<div
			ref={elementRef}
			className={className}
			style={{ ...styles, ...style }}>
			{children}
		</div>
	);
};
