import UsersService from '@/services/users/users.service';
import { NextResponse } from 'next/server';

/**
 * Send change password email link
 * @param request
 * @returns
 */
export async function POST(request: Request) {
  const res = await request.json();
  await UsersService.sendEmailChangePassword(res.email);
  return NextResponse.json({});
}
