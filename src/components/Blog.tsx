'use client';

import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { getImageUrl } from '../utils/posts';
import getTagColor from '../utils/getTagColor';

type Props = {
	id: string;
	title: string;
	createdAt: string;
	// eslint-disable-next-line react/require-default-props
	img?: string;
	slug: string;
	// eslint-disable-next-line react/require-default-props
	tags?: string[];
};

const BlogItem = (props: Props) => {
	const { id, title, createdAt, img, slug, tags = [] } = props;

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
						src={getImageUrl(img).url()}
						width="100%"
						style={{ objectFit: 'cover', height: 260 }}
						className={twMerge(
							'hover:scale-102',
							'rounded-md',
							'transition',
							'ease-in-out',
							'duration-300'
						)}
					/>
				)}
				<div
					className={twMerge('flex', 'flex-row', 'gap-3', 'flex-wrap', 'mt-1')}
				>
					{tags.map((tag) => (
						<span
							className={twMerge(
								'text-md',
								'dark:text-white',
								'text-black',
								'font-semibold',
								'whitespace-nowrap'
							)}
							key={tag}
							style={{ color: getTagColor(tag) }}
						>
							{tag}
						</span>
					))}
				</div>
				<h2
					className={twMerge(
						'text-md',
						'dark:text-white',
						'text-black',
						'font-semibold'
					)}
				>
					{title}
				</h2>
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
