import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { _user } from './utils/auth0.middleware';
import pageRoutes from './routes.list.roles.json';

export async function middleware(request: NextRequest) {
  const session = await _user(request.headers);

  if (request.nextUrl.pathname === '/') {
    if (session.isAuthenticated) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  } else {
    if (!session.isAuthenticated) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    console.log(request.nextUrl.pathname);

    const route = pageRoutes.find(
      (pageRoute) => pageRoute.role === session.user?.role
    );
    if (!route) {
      // invalid access
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    const isValidRoute = route?.routes.some(
      (routeValue) => routeValue === request.nextUrl.pathname
    );
    if (!isValidRoute) {
      // invalid access
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|favicon-32x32.png).*)',
  ],
};
