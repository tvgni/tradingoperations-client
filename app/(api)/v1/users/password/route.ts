import UsersService from '@/services/users/users.service';
import { NextResponse } from 'next/server';

/**
 * Change current user password
 * @param request
 * @returns
 */
export async function POST(request: Request) {
  const res = await request.json();
  const data = await UsersService.changePassword(res.password);

  return NextResponse.json({});
}
