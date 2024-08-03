'use client';

import { twMerge } from 'tailwind-merge';
import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import qs from 'qs';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from '../../../components/Image';
import fetcher from '../../../utils/fetcher';
import type { Post } from '../../../types/data';
import generateSrcSet from '../../../utils/generateSrcSet';
import generateImgLinks from '../../../utils/generateImgLinks';

const query = (slug: string) =>
	qs.stringify(
		{
			filters: {
				slug: {
					$eq: slug
				}
			},
			fields: ['title', 'slug', 'createdAt', 'updatedAt', 'content'],
			populate: {
				categories: {
					fields: ['title', 'slug', 'color']
				},
				mainImage: {
					fields: ['alternativeText', 'formats', 'url', 'width', 'height']
				}
			}
		},
		{
			encodeValuesOnly: true
		}
	);

const BlogPage = ({ params }: { params: { slug: string } }) => {
	const {
		data: post,
		isLoading,
		error
	} = useSWR(`/api/posts?${query(params?.slug)}`, fetcher);
	const { push } = useRouter();

	const data = useMemo<Post>(
		() => (post?.data?.length ? post?.data[0] : undefined),
		[post]
	);

	useEffect(() => {
		if (!isLoading) {
			if (!data || error) {
				push('/blog');
			}
		}
	}, [data, error, isLoading, push]);

	if (isLoading || !data) {
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
				{data.attributes.categories.data.map((cat) => (
					<span
						className={twMerge(
							'text-md',
							'dark:text-white',
							'text-black',
							'font-semibold',
							'whitespace-nowrap',
							'animate-fade-in'
						)}
						key={cat.attributes.slug}
						style={{ color: cat.attributes.color }}
					>
						{cat.attributes.title}
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
				{data.attributes.title}
			</h1>
			<span
				className={twMerge(
					'text-sm',
					'dark:text-gray-600',
					'text-gray-400',
					'animate-fade-in'
				)}
			>
				{new Date(data.attributes.createdAt as string).toLocaleDateString()}
			</span>
			{data.attributes?.mainImage && (
				<Image
					alt={
						data.attributes?.mainImage.data.attributes.alternativeText ||
						`${data.id}-img`
					}
					src={generateImgLinks(data.attributes.mainImage.data.attributes.url)}
					srcSet={generateSrcSet({
						...data.attributes.mainImage.data.attributes.formats,
						base: {
							width: data.attributes.mainImage.data.attributes.width,
							url: data.attributes.mainImage.data.attributes.url,
							height: data.attributes.mainImage.data.attributes.height
						}
					})}
					width="100%"
					style={{ objectFit: 'contain' }}
					className={twMerge('rounded-md', 'animate-fade-up')}
				/>
			)}
			{data?.attributes.content && (
				<div>
					<Markdown
						remarkPlugins={[remarkGfm]}
						components={{
							// eslint-disable-next-line react/no-unstable-nested-components
							img: (props) => (
								<Image
									{...props}
									src={generateImgLinks(props.src)}
									width="100%"
									style={{ objectFit: 'contain' }}
									className={twMerge('rounded-md', 'animate-fade-up')}
								/>
							)
						}}
					>
						{data.attributes.content}
					</Markdown>
				</div>
			)}
		</div>
	);
};

BlogPage.displayName = 'BlogPage';
export default BlogPage;
