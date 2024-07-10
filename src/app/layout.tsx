import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Box, Flex, Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { twMerge } from 'tailwind-merge';

import Header from '../components/Header';
import Analytics from '../components/Analytics';
import ProgressProvider from '../components/ProgressBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Orkun KARAKUŞ',
	description: 'A software developer | Orkun KARAKUŞ'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<Analytics />
		<body className={twMerge(inter.className, 'min-h-screen')}>
			<ThemeProvider attribute="class">
				<Theme>
					<ProgressProvider>
						<Flex direction="column" className={twMerge('min-h-dvh')}>
							<Box
								className={twMerge('fixed', 'w-full', 'z-50')}
								style={{ backgroundColor: 'var(--color-background)' }}
							>
								<Header />
							</Box>
							<Flex
								direction="column"
								className={twMerge('p-4', 'pt-16', 'flex-1')}
							>
								{children}
							</Flex>
						</Flex>
					</ProgressProvider>
				</Theme>
			</ThemeProvider>
		</body>
	</html>
);

RootLayout.displayName = 'RootLayout';
export default RootLayout;
