import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Box, Flex, Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { twMerge } from 'tailwind-merge';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Orkun KARAKUŞ',
	description: 'A software developer | Orkun KARAKUŞ'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<body className={twMerge(inter.className, 'min-h-screen')}>
			<ThemeProvider attribute="class">
				<Theme>
					<Flex direction="column" className={twMerge('min-h-dvh')}>
						<Box className={twMerge('p-8', 'fixed', 'w-full')}>
							<Header />
						</Box>
						<Flex direction="column" className={twMerge('p-4', 'flex-1')}>
							{children}
						</Flex>
					</Flex>
				</Theme>
			</ThemeProvider>
		</body>
	</html>
);

RootLayout.displayName = 'RootLayout';
export default RootLayout;
