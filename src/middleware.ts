import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COLORS = {
	RESET: '\x1b[0m',
	FG_GREEN: '\x1b[32m',
	FG_RED: '\x1b[31m'
};

export function middleware(request: NextRequest) {
	const start = Date.now();

	const requestHeaders = new Headers(request.headers);
	requestHeaders.set('Authorization', process.env.CMS_API_AUTH_TOKEN as string);

	const response = NextResponse.next({
		request: {
			// New request headers
			headers: requestHeaders
		}
	});

	const duration = Date.now() - start;
	const statusCode = response.status;

	const color =
		statusCode >= 200 && statusCode < 300 ? COLORS.FG_GREEN : COLORS.FG_RED;

	if (process.env.API_REQUEST_LOGGING_ENABLED === 'true') {
		// eslint-disable-next-line no-console
		console.log(
			`${color}${request.method} ${request.nextUrl.pathname} ${statusCode} ${duration}ms${COLORS.RESET}`
		);
	}

	return response;
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: '/api/:path*'
};
