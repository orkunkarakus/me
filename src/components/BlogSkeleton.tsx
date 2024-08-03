'use client';

const BlogSkeleton = () => (
	<div className="animate-pulse p-3 grid grid-cols-1 gap-4">
		<div className="h-60 w-full bg-gray-200 rounded-md" />
		<div className="flex flex-row gap-3 flex-wrap">
			<span className="text-md bg-gray-200 rounded w-20 h-5" />
			<span className="text-md bg-gray-200 rounded w-20 h-5" />
		</div>
		<div className="h-6 bg-gray-200 rounded w-1/2" />
		<div className="h-4 bg-gray-200 rounded w-1/3" />
	</div>
);

BlogSkeleton.displayName = 'BlogSkeleton';
export default BlogSkeleton;
