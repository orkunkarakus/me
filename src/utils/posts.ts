import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import CONST from '../config/const.config';

const sanityClient = createClient({
	projectId: CONST.SANITY.ID,
	dataset: 'production',
	apiVersion: '2024-03-11',
	useCdn: CONST.IS_PRODUCTION,
	perspective: 'published'
});

export const getBlogPosts = async () => {
	const posts = await sanityClient.fetch(
		`*[_type == "post"]{_id,mainImage,title,tags,slug,_createdAt,_updatedAt}`
	);

	return posts;
};

export const getBlogPost = async (slug: string) => {
	const post = await sanityClient.fetch(
		`*[_type == "post" && slug.current == $slug]{_id,mainImage,title,tags,slug,_createdAt,_updatedAt,content}`,
		{ slug }
	);

	return post;
};

export const getImageUrl = (source: SanityImageSource) =>
	imageUrlBuilder(sanityClient).image(source);

export default sanityClient;
