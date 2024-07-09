'use client';

import { clamp, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';

function useBoundedScroll(threshold: number) {
	const { scrollY } = useScroll();
	const scrollYBounded = useMotionValue(0);
	const scrollYBoundedProgress = useTransform(
		scrollYBounded,
		[0, threshold],
		[0, 1]
	);

	useEffect(
		() =>
			scrollY.on('change', (current) => {
				const previous = scrollY.getPrevious();
				const diff = current - (previous || 0);
				const newScrollYBounded = scrollYBounded.get() + diff;

				scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
			}),
		[threshold, scrollY, scrollYBounded]
	);

	return { scrollYBounded, scrollYBoundedProgress };
}

export default useBoundedScroll;
