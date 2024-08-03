'use client';

import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import type { Category } from '../types/data';

type Props = {
	id: number | string;
	title: string;
	createdAt: string;
	slug: string;
	img: {
		base: string;
		srcSet: string;
	};
	categories: Category[];
};

const BlogItem = (props: Props) => {
	const { id, title, createdAt, img, slug, categories = [] } = props;

	return (
		<Link href={`/blog/${slug}`}>
			<div
				className={twMerge(
					'p-3',
					'grid',
					'grid-cols-1',
					'gap-2',
					'animate-fade-up'
				)}
			>
				{img && (
					<img
						alt={`${id}-img`}
						src={img.base}
						width="100%"
						style={{ objectFit: 'cover', height: 260 }}
						className={twMerge(
							'hover:scale-102',
							'rounded-md',
							'transition',
							'ease-in-out',
							'duration-300'
						)}
						srcSet={img.srcSet}
					/>
				)}
				<div
					className={twMerge('flex', 'flex-row', 'gap-3', 'flex-wrap', 'mt-1')}
				>
					{categories.map((cat) => (
						<span
							className={twMerge(
								'text-md',
								'dark:text-white',
								'text-black',
								'font-semibold',
								'whitespace-nowrap'
							)}
							key={cat.attributes.slug}
							style={{ color: cat.attributes.color }}
						>
							{cat.attributes.title}
						</span>
					))}
				</div>
				<span
					className={twMerge(
						'text-md',
						'dark:text-white',
						'text-black',
						'font-semibold'
					)}
				>
					{title}
				</span>
				<span
					className={twMerge('text-sm', 'dark:text-gray-600', 'text-gray-400')}
				>
					{new Date(createdAt).toLocaleDateString()}
				</span>
			</div>
		</Link>
	);
};

BlogItem.displayName = 'BlogItem';
export default BlogItem;
