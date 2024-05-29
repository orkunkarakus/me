'use client';

import Script from 'next/script';
import CONST from '../config/const.config';

const Analytics = () => (
	<>
		<Script
			strategy="lazyOnload"
			src={`https://www.googletagmanager.com/gtag/js?id=${CONST.GOOGLE_ANALYTICS.ID}`}
		/>

		<Script id="" strategy="lazyOnload">
			{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${CONST.GOOGLE_ANALYTICS.ID}', {
              page_path: window.location.pathname,
              });
          `}
		</Script>
	</>
);

Analytics.displayName = 'Analytics';
export default Analytics;
