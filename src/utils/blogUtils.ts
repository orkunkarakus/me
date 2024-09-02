import type { Category } from '../types/data';
import { getTagColor, getTagTitle } from './tagUtil';

export const generateBlogImgLink = (path: string) => `/assets/${path}`;

export const generateCategoryData = (categories: string[]): Category[] =>
	categories.map((item) => ({
		slug: item,
		color: getTagColor(item),
		title: getTagTitle(item)
	}));
