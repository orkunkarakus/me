const TAG_COLORS = {
	React: '#61DAFB', // React Blue
	'React Native': '#3D8FC6', // React Native Blue
	JavaScript: '#F7DF1E', // JavaScript Yellow
	TypeScript: '#3178C6', // TypeScript Blue
	HTML: '#E34F26', // HTML Orange
	CSS: '#1572B6', // CSS Blue
	'Node.js': '#339933', // Node.js Green
	'Vue.js': '#4FC08D', // Vue.js Green
	Angular: '#DD0031' // Angular Red
};

const getTagColor = (tag: string) =>
	TAG_COLORS[tag as keyof typeof TAG_COLORS] || 'inherit';

export default getTagColor;
