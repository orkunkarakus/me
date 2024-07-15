import generateImgLinks from './generateImgLinks';

type Format = {
	url: string;
	width: number;
	height: number;
};
type Props = {
	thumbnail: Format;
	small: Format;
	medium: Format;
	large: Format;
	base: Format;
};

const generateSrcSet = (data: Props) => {
	const set = [
		`${generateImgLinks(data.thumbnail.url)} ${data.thumbnail.width}w`,
		`${generateImgLinks(data.small.url)} ${data.small.width}w`,
		`${generateImgLinks(data.medium.url)} ${data.medium.width}w`,
		`${generateImgLinks(data.large.url)} ${data.large.width}w`,
		`${generateImgLinks(data.base.url)} ${data.base.width}w`
	];

	return set.join(',');
};

export default generateSrcSet;
