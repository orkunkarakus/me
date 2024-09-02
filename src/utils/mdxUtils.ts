/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import fs from 'fs';
import path from 'path';

import * as matter from 'gray-matter';
import type { Categories } from '../types/const';

type Metadata = {
	title: string;
	publishedAt: string;
	image?: string;
	categories: Categories[];
};

function parseFrontmatter(fileContent: string) {
	const parsed = matter(fileContent);

	return { metadata: parsed.data as Metadata, content: parsed.content };
}

function getMDXFiles(dir: fs.PathLike) {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: fs.PathLike) {
	const rawContent = fs.readFileSync(filePath, 'utf-8');

	return parseFrontmatter(rawContent);
}

export function getMDXData(dir: string) {
	const mdxFiles = getMDXFiles(dir);

	return mdxFiles.map((file) => {
		const { metadata, content } = readMDXFile(path.join(dir, file));
		const slug = path.basename(file, path.extname(file));

		return {
			metadata,
			slug,
			content
		};
	});
}
