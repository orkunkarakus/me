/* eslint-disable import/prefer-default-export */
import path from 'path';
import { getMDXData } from '../utils/mdxUtils';

export const getBlogPosts = () =>
	getMDXData(path.join(process.cwd(), 'src', 'app', 'blog', 'posts'));

export const getBlogPost = (slug: string) => {
	const posts = getBlogPosts();
	const found = posts.find((item) => item.slug === slug);

	return found;
};
