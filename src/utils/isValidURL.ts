function isValidURL(url: string) {
	try {
		// eslint-disable-next-line no-new
		new URL(url);

		return true;
	} catch (_) {
		return false;
	}
}

export default isValidURL;
