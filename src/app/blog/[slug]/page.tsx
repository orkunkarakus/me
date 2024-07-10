'use client';

import { twMerge } from 'tailwind-merge';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getBlogPost, getImageUrl } from '../../../utils/posts';
import getTagColor from '../../../utils/getTagColor';
import type { Data } from '../../../types/data';
import CustomPortableText from '../../../components/PortableText';
import Image from '../../../components/Image';

const BlogPage = ({ params }: { params: { slug: string } }) => {
	const [data, setData] = useState<Data>();
	const { push } = useRouter();

	const image = useMemo(
		() => data?.mainImage?.image?.asset?._ref,
		[data?.mainImage?.image?.asset?._ref]
	);

	const fetch = useCallback(async () => {
		if (params?.slug) {
			const res = await getBlogPost(params.slug);
			if (!res?.length) {
				push('/blog');

				return;
			}
			setData(res[0]);
		}
	}, [params.slug, push]);

	useEffect(() => {
		fetch();
	}, [fetch]);

	if (!data) {
		return (
			<div className="animate-pulse">
				<div className="flex flex-col gap-8 items-center">
					<div className="flex flex-row gap-3 flex-wrap">
						<span className="bg-gray-200 dark:bg-gray-600 rounded-full h-4 w-24" />
						<span className="bg-gray-200 dark:bg-gray-600 rounded-full h-4 w-24" />
					</div>
					<span className="bg-gray-200 dark:bg-gray-600 h-6 my-4 rounded-full w-full" />
					<span className="bg-gray-200 dark:bg-gray-600 w-1/6 h-4 rounded-full" />
					<div className="bg-gray-200 dark:bg-gray-600 rounded w-full h-64 my-4" />
					<div className="bg-gray-200 dark:bg-gray-600 w-full h-4 rounded-full" />
					<div className="bg-gray-200 dark:bg-gray-600 w-full h-4 rounded-full" />
				</div>
			</div>
		);
	}

	return (
		<div className={twMerge('flex', 'flex-col', 'gap-4', 'items-center')}>
			<div className={twMerge('flex', 'flex-row', 'gap-3', 'flex-wrap')}>
				{data?.tags?.map((tag) => (
					<span
						className={twMerge(
							'text-md',
							'dark:text-white',
							'text-black',
							'font-semibold',
							'whitespace-nowrap',
							'animate-fade-in'
						)}
						key={tag}
						style={{ color: getTagColor(tag) }}
					>
						{tag}
					</span>
				))}
			</div>
			<h1
				className={twMerge(
					'text-3xl',
					'dark:text-white',
					'text-black',
					'font-semibold',
					'text-center',
					'animate-fade-up'
				)}
			>
				{data?.title}
			</h1>
			<span
				className={twMerge(
					'text-sm',
					'dark:text-gray-600',
					'text-gray-400',
					'animate-fade-in'
				)}
			>
				{new Date(data?._createdAt as string).toLocaleDateString()}
			</span>
			{image && (
				<Image
					alt={`${data?._id}-img`}
					src={getImageUrl(image).url()}
					width="100%"
					style={{ objectFit: 'contain', maxHeight: 500 }}
					className={twMerge('rounded-md', 'animate-fade-up')}
				/>
			)}
			{data?.content && <CustomPortableText value={data.content} />}
		</div>
	);
};

BlogPage.displayName = 'BlogPage';
export default BlogPage;
