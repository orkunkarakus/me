export type Data = {
	_id: string;
	_createdAt: string;
	_updatedAt: string;
	tags?: string[];
	title: string;
	mainImage?: {
		image?: {
			asset?: {
				_ref: string;
			};
		};
	};
	slug?: {
		current: string;
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content?: any[];
};
