/* eslint-disable jsx-a11y/alt-text */
import type { ComponentPropsWithoutRef } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

type Props = ComponentPropsWithoutRef<'img'>;

const Image = (props: Props) => (
	<Zoom>
		<img {...props} />
	</Zoom>
);

Image.displayName = 'Image';
export default Image;
