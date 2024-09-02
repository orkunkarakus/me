import { MDXRemote } from 'next-mdx-remote/rsc';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import GithubStarButton from './GithubStarButton';
import Image from './Image';

const MarkdownRenderer = (props: { source: string }) => (
	<MDXRemote
		{...props}
		components={{
			Image,
			GithubLogo,
			LinkedinLogo,
			GithubStarButton
		}}
	/>
);

MarkdownRenderer.displayName = 'MarkdownRenderer';
export default MarkdownRenderer;
