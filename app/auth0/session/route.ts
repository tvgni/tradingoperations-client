import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json(
    { data: cookies().get('name') },
    { headers: { 'Set-Cookie': `token=${123456}` } }
  );
}
