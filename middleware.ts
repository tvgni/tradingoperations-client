import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { user } from './utils/auth0';

export async function middleware(request: NextRequest) {
  const session = await user();
  console.log(session);

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/nextjs',
};
