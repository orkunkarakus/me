'use client';

import { twMerge } from 'tailwind-merge';
import useSWR from 'swr';
import qs from 'qs';
import BlogItem from '../../components/Blog';
import type { Post } from '../../types/data';
import BlogSkeleton from '../../components/BlogSkeleton';
import fetcher from '../../utils/fetcher';
import generateImgLinks from '../../utils/generateImgLinks';
import generateSrcSet from '../../utils/generateSrcSet';

const query = qs.stringify(
	{
		fields: ['title', 'slug', 'createdAt', 'updatedAt'],
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

const Page = () => {
	const { data: posts, isLoading } = useSWR(`/api/posts?${query}`, fetcher);

	return (
		<div className={twMerge('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-7')}>
			{isLoading ? (
				<>
					<BlogSkeleton />
					<BlogSkeleton />
				</>
			) : posts?.data?.length > 0 ? (
				posts.data.map((item: Post) => (
					<BlogItem
						key={item.id}
						id={item.id}
						title={item.attributes.title}
						img={{
							base: generateImgLinks(
								item.attributes.mainImage.data.attributes.url
							),
							srcSet: generateSrcSet({
								...item.attributes.mainImage.data.attributes.formats,
								base: {
									width: item.attributes.mainImage.data.attributes.width,
									url: item.attributes.mainImage.data.attributes.url,
									height: item.attributes.mainImage.data.attributes.height
								}
							})
						}}
						slug={item.attributes.slug}
						categories={item.attributes.categories.data}
						createdAt={item.attributes.createdAt}
					/>
				))
			) : (
				<span
					className={twMerge(
						'text-md',
						'dark:text-white',
						'text-black',
						'font-semibold'
					)}
				>
					Şu anlık her hangi bir blog yazısı bulunmamaktadır !
				</span>
			)}
		</div>
	);
};

Page.displayName = 'Page';
export default Page;
