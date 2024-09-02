'use client';

/* eslint-disable jsx-a11y/alt-text */
import { Text } from '@radix-ui/themes';
import type { ComponentPropsWithoutRef } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

type Props = ComponentPropsWithoutRef<'img'>;

const Image = (props: Props) => (
	<Zoom>
		<img {...props} />
		<Text as="p" align="center" size="2" color="gray">
			{props.alt}
		</Text>
	</Zoom>
);

Image.displayName = 'Image';
export default Image;
