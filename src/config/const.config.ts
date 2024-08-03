const CONST = {
	GOOGLE_ANALYTICS: {
		ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID
	},
	IS_PRODUCTION: process.env.NODE_ENV === 'production',
	SANITY: {
		ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
	}
};

export default CONST;
