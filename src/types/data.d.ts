export type Category = {
	id: number;
	attributes: {
		title: string;
		slug: string;
		color: string;
	};
};

export type MainImage = {
	id: number;
	attributes: {
		alternativeText?: string;
		url: string;
		width: number;
		height: number;
		formats: {
			large: {
				url: string;
				width: number;
				height: number;
			};
			small: {
				url: string;
				width: number;
				height: number;
			};
			medium: {
				url: string;
				width: number;
				height: number;
			};
			thumbnail: {
				url: string;
				width: number;
				height: number;
			};
		};
	};
};

export type PostAttributes = {
	title: string;
	slug: string;
	categories: {
		data: Category[];
	};
	createdAt: string;
	updatedAt: string;
	mainImage: {
		data: MainImage;
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content?: any;
};

export type Post = {
	id: number;
	attributes: PostAttributes;
};

export type Posts = Post[];
