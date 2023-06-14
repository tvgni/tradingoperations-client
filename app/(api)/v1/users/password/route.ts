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
    console.log('*******');
    console.log(res);
    console.log('*******');

    await UsersService.changePassword(res.password);
    return NextResponse.json({});
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(error.response, {
      status: error.response.statusCode,
    });
  }
}
