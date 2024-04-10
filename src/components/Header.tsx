'use client';

import { Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

const Header = memo(() => (
	<header>
		<Flex
			gap="8"
			justify="center"
			align="center"
			className={twMerge('animate-scale-in')}
		>
			<Link href="/">
				<Text className={twMerge('font-logo', 'font-semibold', 'text-5xl')}>
					Orkun
				</Text>
				-
			</Link>
		</Flex>
	</header>
));

Header.displayName = 'Header';
export default Header;
