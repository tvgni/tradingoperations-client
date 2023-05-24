import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { _user } from './utils/auth0.middleware';

export async function middleware(request: NextRequest) {
  const session = await _user(request.headers);
  console.log(session);
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/nextjs',
};
