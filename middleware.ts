import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import url from 'url';
import { getAuth0TokenFromAuthorazionCode } from './utils/auth0';

export async function middleware(request: NextRequest) {
  const paramenteres = url.parse(request.url, true);
  const auth0AuthorazionCode = paramenteres.query.code;
  const auth0AuthorazionState = paramenteres.query.state;
  const tokenData = await getAuth0TokenFromAuthorazionCode(
    auth0AuthorazionCode?.toString() ?? ''
  );
  console.log(tokenData);

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/auth0/session',
};
