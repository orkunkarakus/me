import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			animation: {
				'scale-in': 'scale-in 1s cubic-bezier(0.16, 1, 0.3, 1)',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-up': 'fade-up 0.5s',
				'fade-down': 'fade-down 0.5s',
				'slide-left-fade': 'slide-left-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-right-fade':
					'slide-right-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
			},
			keyframes: {
				'scale-in': {
					'0%': { transform: 'scale(0.5)' },
					'100%': { transform: 'scale(1)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'80%': {
						opacity: '0.6'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0px)'
					}
				},
				'fade-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px)'
					},
					'80%': {
						opacity: '0.6'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0px)'
					}
				},
				'slide-left-fade': {
					'0%': { opacity: '0', transform: 'translateX(50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-right-fade': {
					'0%': { opacity: '0', transform: 'translateX(-50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				}
			}
		},
		fontFamily: {
			logo: ['"Dancing Script"', 'cursive']
		}
	},
	plugins: [
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'animation-delay': (value) => ({
						'animation-delay': value
					})
				},
				{
					values: theme('transitionDelay')
				}
			);
		})
	]
};
export default config;
