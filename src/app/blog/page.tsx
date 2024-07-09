'use client';

import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';
import { getBlogPosts } from '../../utils/posts';
import BlogItem from '../../components/Blog';
import type { Data } from '../../types/data';
import BlogSkeleton from '../../components/BlogSkeleton';

const Page = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetch = async () => {
		const res = await getBlogPosts();
		setPosts(res);
		setLoading(false);
	};

	useEffect(() => {
		fetch();
	}, []);

	return (
		<div className={twMerge('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-7')}>
			{loading && (
				<>
					<BlogSkeleton />
					<BlogSkeleton />
				</>
			)}
			{posts.length > 0 &&
				posts.map((item: Data) => (
					<BlogItem
						key={item._id}
						id={item._id}
						title={item.title}
						img={item?.mainImage?.image?.asset?._ref}
						slug={item?.slug?.current as string}
						tags={item?.tags}
						createdAt={item?._createdAt}
					/>
				))}
		</div>
	);
};

Page.displayName = 'Page';
export default Page;
