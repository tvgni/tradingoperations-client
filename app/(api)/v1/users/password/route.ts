import UsersService from '@/services/users/users.service';
import { NextResponse } from 'next/server';

/**
 * Change current user password
 * @param request
 * @returns
 */
export async function POST(request: Request) {
  try {
    const res = await request.json();
    await UsersService.changePassword(res.password);
    return new Response();
  } catch (error: any) {
    return NextResponse.json(error.response, {
      status: error.response.statusCode,
    });
  }
}
