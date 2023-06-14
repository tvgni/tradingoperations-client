import UsersService from '@/services/users/users.service';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);

  await UsersService.sendEmailChangePassword(res.email);
  return NextResponse.json({});
}
