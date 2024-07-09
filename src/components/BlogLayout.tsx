import { Flex } from '@radix-ui/themes';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const BlogLayout = ({ children }: { children: ReactNode }) => (
	<Flex
		direction="column"
		className={twMerge(
			'p-4',
			'flex-1',
			'pt-24',
			'max-w-screen-lg',
			'mx-auto',
			'w-full'
		)}
	>
		{children}
	</Flex>
);

BlogLayout.displayName = 'BlogLayout';
export default BlogLayout;
