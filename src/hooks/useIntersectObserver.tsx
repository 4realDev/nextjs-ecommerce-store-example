import { useState, useRef, useEffect } from 'react';

/**
 * A React hook that provides intersection observation capabilities for detecting when an element
 * enters or exits the viewport. Perfect for implementing scroll-triggered animations, lazy loading,
 * analytics tracking, and infinite scrolling.
 *
 * @param {number|number[]} [threshold=0.1] - Percentage of element visibility required to trigger (0-1)
 * @param {string} [rootMargin] - Margin around the root element (e.g., '10px 0px -10px 0px')
 *
 * @returns {RefObject<HTMLElement>} returns.elementRef - Ref to attach to the target element
 * @returns {boolean} returns.isIntersecting - Current intersection state (true when element is visible)
 * @returns {boolean} returns.hasIntersected - Whether element has ever been intersected (stays true once triggered)
 *
 * @example
 * // One-time animation trigger
 * const { elementRef, hasIntersected } = useIntersectionObserver({
 *   threshold: 0.5,
 *   rootMargin: '0px 0px -100px 0px'
 * });
 *
 * @example
 * // Repeating visibility toggle
 * const { elementRef, isIntersecting } = useIntersectionObserver({
 *   threshold: 0.5
 * });
 */

type UseIntersectionObserverOptions = {
	threshold?: number | number[];
	rootMargin?: string;
};

export const useIntersectionObserver = ({
	threshold = 0.1,
	rootMargin,
}: UseIntersectionObserverOptions) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const [hasIntersected, setHasIntersected] = useState(false);
	const elementRef = useRef(null);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
				if (entry.isIntersecting && !hasIntersected) {
					setHasIntersected(true);
				}
			},
			{
				threshold,
				rootMargin,
			}
		);

		observer.observe(element);

		return () => {
			observer.unobserve(element);
		};
	}, [hasIntersected, threshold, rootMargin]);

	return { elementRef, isIntersecting, hasIntersected };
};
