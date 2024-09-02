import { twMerge } from 'tailwind-merge';
import { redirect } from 'next/navigation';
import { getBlogPost } from '../../../api/blog';
import Image from '../../../components/Image';
import {
	generateBlogImgLink,
	generateCategoryData
} from '../../../utils/blogUtils';
import MarkdownRenderer from '../../../components/MarkdownRenderer';
import DateUtil from '../../../utils/dateUtil';

const BlogPage = async ({ params }: { params: { slug: string } }) => {
	const data = getBlogPost(params?.slug);

	if (!data) {
		redirect('/blog');

		return <div />;
	}

	return (
		<div className={twMerge('flex', 'flex-col', 'gap-4', 'items-center')}>
			<div className={twMerge('flex', 'flex-row', 'gap-3', 'flex-wrap')}>
				{generateCategoryData(data.metadata.categories).map((cat) => (
					<span
						className={twMerge(
							'text-md',
							'dark:text-white',
							'text-black',
							'font-semibold',
							'whitespace-nowrap',
							'animate-fade-in'
						)}
						key={cat.slug}
						style={{ color: cat.color }}
					>
						{cat.title}
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
				{data.metadata.title}
			</h1>
			<span
				className={twMerge(
					'text-sm',
					'dark:text-gray-600',
					'text-gray-400',
					'animate-fade-in'
				)}
			>
				{data.metadata.publishedAt &&
					DateUtil.parseDate(data.metadata.publishedAt)}
			</span>
			{data.metadata.image && (
				<Image
					src={generateBlogImgLink(data.metadata.image)}
					width="100%"
					style={{ objectFit: 'contain' }}
					className={twMerge('rounded-md', 'animate-fade-up')}
				/>
			)}
			{data?.content && (
				<div>
					<MarkdownRenderer source={data.content} />
				</div>
			)}
		</div>
	);
};

BlogPage.displayName = 'BlogPage';
export default BlogPage;
