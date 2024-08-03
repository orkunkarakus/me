'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

type Props = { children: React.ReactNode };

const ProgressProvider = ({ children }: Props) => (
	<>
		{children}
		<ProgressBar
			height="4px"
			color="#00bfff"
			options={{ showSpinner: true }}
			shallowRouting
		/>
	</>
);

ProgressProvider.displayName = 'ProgressProvider';
export default ProgressProvider;
