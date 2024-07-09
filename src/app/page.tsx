'use client';

import { Avatar, Flex, Link, Text, Tooltip } from '@radix-ui/themes';
import { twMerge } from 'tailwind-merge';
import ASSETS_SRC from '../config/assets.config';
import SOCIAL_MEDIAS from '../config/social.config';

const Home = () => (
	<Flex
		direction="column"
		gap="5"
		align="center"
		justify="center"
		className={twMerge('flex-1')}
	>
		<Avatar
			src={ASSETS_SRC.PP}
			fallback="Orkun Karakuş PP"
			radius="full"
			className={twMerge(
				'hover:scale-105 transition-transform',
				'w-[180px]',
				'h-[180px]',
				'animate-fade-up',
				'lg:w-[300px]',
				'lg:h-[300px]'
			)}
		/>
		<Flex direction="column" gap="3" align="center" justify="center">
			<Text
				className={twMerge(
					'font-logo',
					'font-semibold',
					'text-4xl',
					'lg:text-5xl',
					'animate-slide-right-fade'
				)}
			>
				Orkun Karakuş
			</Text>
			<Text
				className={twMerge(
					'animate-slide-left-fade',
					'text-base',
					'lg:text-lg',
					'font-medium',
					'text-center'
				)}
				color="gray"
			>
				Software Developer
			</Text>
		</Flex>
		<Text
			className={twMerge(
				'text-sm',
				'lg:text-base',
				'animate-fade-up',
				'text-center'
			)}
			color="gray"
		>
			A full stack software developer who gets his motivation from his work and
			principles.
		</Text>
		<Flex direction="row" gap="5" className={twMerge('animate-fade-down')}>
			{Object.entries(SOCIAL_MEDIAS).map(([key, value]) => (
				<Link key={key} href={value.url} target="_blank">
					<Tooltip content={value.title}>
						<value.icon
							size={30}
							color="gray"
							className={twMerge(
								'cursor-pointer',
								'hover:scale-110',
								'hover:fill-sky-700'
							)}
						/>
					</Tooltip>
				</Link>
			))}
		</Flex>
		<a href="/blog" className={twMerge('hover:scale-105', 'animate-scale-in')}>
			<span
				className={twMerge(
					'border-dashed',
					'border-2',
					'p-2',
					'px-5',
					'rounded-lg',
					'border-gray-300 dark:border-gray-600 hover:border-sky-700',
					'cursor-pointer',
					'text-gray-600',
					'hover:text-sky-700',
					'font-medium',
					'text-md'
				)}
			>
				Blog
			</span>
		</a>
	</Flex>
);

Home.displayName = 'Home';
export default Home;
