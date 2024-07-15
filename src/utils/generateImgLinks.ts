const generateImgLinks = (path: string) =>
	path.replace(/\/uploads\//, '/content/public/');

export default generateImgLinks;
