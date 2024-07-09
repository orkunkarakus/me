/* eslint-disable react/no-unstable-nested-components */
/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {
	PortableText,
	type PortableTextComponents,
	type PortableTextBlock
} from 'next-sanity';
import Link from 'next/link';
import { getImageUrl } from '../utils/posts';

const CustomPortableText = ({ value }: { value: PortableTextBlock[] }) => {
	const components: PortableTextComponents = {
		marks: {
			link: ({ children, value: _value }) => (
				<Link
					href={_value?.href}
					style={{ color: 'dodgerblue', textDecoration: 'underline' }}
				>
					{children}
				</Link>
			)
		},
		types: {
			image: ({ value: _value }) => {
				if (!_value?.asset?._ref) {
					return null;
				}

				return (
					<img
						alt={_value.alt || ' '}
						loading="lazy"
						src={getImageUrl(_value).url()}
					/>
				);
			}
		}
	};

	return (
		<div className="blog-content">
			<PortableText components={components} value={value} />
		</div>
	);
};

CustomPortableText.displayName = 'CustomPortableText';
export default CustomPortableText;
