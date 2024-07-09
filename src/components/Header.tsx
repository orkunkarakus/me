'use client';

import { Flex } from '@radix-ui/themes';
import Link from 'next/link';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTransform, motion, useScroll } from 'framer-motion';

const SCROLL = 150;

const Header = memo(() => {
	const { scrollY } = useScroll();

	return (
		<motion.header
			style={{
				boxShadow: useTransform(
					scrollY,
					[0, SCROLL],
					['none', '0 5px 8px -1px rgba(0, 0, 0, 0.1)'],
					{ clamp: false }
				)
			}}
			className={twMerge('transition-shadow')}
		>
			<Flex
				gap="8"
				align="center"
				justify="center"
				className={twMerge('animate-scale-in', 'p-4')}
			>
				<Link href="/">
					<motion.span
						className={twMerge('font-logo', 'font-semibold', 'text-5xl')}
						style={{
							fontSize: useTransform(scrollY, [0, SCROLL], ['3rem', '2rem'])
						}}
					>
						Orkun
					</motion.span>
				</Link>
			</Flex>
		</motion.header>
	);
});

Header.displayName = 'Header';
export default Header;
