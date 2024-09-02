'use client';

import { useEffect, useState } from 'react';
import GitHubButtonBase from 'react-github-btn';

const GithubStarButton = ({ user, repo }: { user: string; repo: string }) => {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const tmt = setTimeout(() => {
			setIsReady(true);
		}, 350);

		return () => {
			clearTimeout(tmt);
		};
	}, []);

	return (
		<GitHubButtonBase
			href={`https://github.com/${user}/${repo}`}
			data-color-scheme="no-preference: light; light: light; dark: dark_dimmed;"
			data-size="large"
			data-show-count="true"
			aria-label="Star react-native-qr on GitHub"
		>
			{isReady ? 'Give star on Github' : ''}
		</GitHubButtonBase>
	);
};

GithubStarButton.displayName = 'GithubStarButton';
export default GithubStarButton;
