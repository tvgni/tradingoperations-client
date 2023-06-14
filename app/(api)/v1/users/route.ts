import { UserCreateModel } from '@/services/users/user.service.model';
import UsersService from '@/services/users/users.service';
import { NextResponse } from 'next/server';

/**
 * Get users from auth0
 * @param request
 * @returns
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const skip = Number(searchParams.get('skip'));
  const take = Number(searchParams.get('take'));
  const page = skip / take + 1;

  const users = await UsersService.getUsers(page, take);

  return NextResponse.json(users);
}

/**
 * Create user auth0
 * @param request
 * @returns
 */
export async function POST(request: Request) {
  const res = await request.json();
  await UsersService.createUser(res as UserCreateModel);
  return NextResponse.json({});
}

export async function PUT(request: Request) {
  const res = await request.json();
  console.log(res);

  return NextResponse.json(res);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await UsersService.deleteUser(id);
  return NextResponse.json({});
}
