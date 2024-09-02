import { twMerge } from 'tailwind-merge';
import BlogItem from '../../components/Blog';
import { getBlogPosts } from '../../api/blog';
import {
	generateBlogImgLink,
	generateCategoryData
} from '../../utils/blogUtils';

const Page = async () => {
	const posts = getBlogPosts();

	return (
		<div className={twMerge('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-7')}>
			{posts.map((item) => (
				<BlogItem
					key={item.slug}
					id={item.slug}
					title={item.metadata.title}
					img={
						item.metadata?.image ? generateBlogImgLink(item.metadata.image) : ''
					}
					slug={item.slug}
					categories={generateCategoryData(item.metadata.categories || [])}
					createdAt={item.metadata.publishedAt}
				/>
			))}
		</div>
	);
};

Page.displayName = 'Page';
export default Page;
