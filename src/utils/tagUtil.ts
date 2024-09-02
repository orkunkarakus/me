const TAGS = {
	REACT: 'REACT',
	RN: 'RN',
	JS: 'JS',
	TS: 'TS',
	HTML: 'HTML',
	CSS: 'CSS',
	NODE: 'NODE',
	VUE: 'VUE',
	ANGULAR: 'ANGULAR'
};

const TAG_TITLE = {
	[TAGS.REACT]: 'React',
	[TAGS.RN]: 'React Native',
	[TAGS.JS]: 'JavaScript',
	[TAGS.TS]: 'TypeScript',
	[TAGS.HTML]: 'Html',
	[TAGS.CSS]: 'Css',
	[TAGS.NODE]: 'Node.JS',
	[TAGS.VUE]: 'Vue.JS',
	[TAGS.ANGULAR]: 'Angular'
};

const TAG_COLORS = {
	[TAGS.REACT]: '#61DAFB', // React Blue
	[TAGS.RN]: '#3D8FC6', // React Native Blue
	[TAGS.JS]: '#F7DF1E', // JavaScript Yellow
	[TAGS.TS]: '#3178C6', // TypeScript Blue
	[TAGS.HTML]: '#E34F26', // HTML Orange
	[TAGS.CSS]: '#1572B6', // CSS Blue
	[TAGS.NODE]: '#339933', // Node.js Green
	[TAGS.VUE]: '#4FC08D', // Vue.js Green
	[TAGS.ANGULAR]: '#DD0031' // Angular Red
};

export const getTagColor = (tag: string) =>
	TAG_COLORS[tag as keyof typeof TAG_COLORS] || 'inherit';

export const getTagTitle = (tag: string) =>
	TAG_TITLE[tag as keyof typeof TAG_TITLE] || tag;
