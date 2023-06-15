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
  const filter = searchParams.get('filter');
  const sort = searchParams.get('sort');

  let searchText = '';
  if (filter) {
    const q = JSON.parse(filter);
    searchText = q[0][2];
  }
  let selector = 'given_name';
  let desc = true;
  if (sort) {
    const sortQuerty = JSON.parse(sort) as any[];
    if (sortQuerty.length > 0) {
      selector = sortQuerty[0].selector;
      desc = sortQuerty[0].desc;
      const validColumns = [
        {
          column: 'given_name',
          columnDb: 'given_name',
        },
        {
          column: 'family_name',
          columnDb: 'family_name',
        },
        {
          column: 'email',
          columnDb: 'email',
        },
        {
          column: 'blocked',
          columnDb: 'blocked',
        },
        {
          column: 'phone_number',
          columnDb: 'user_metadata.phone_number',
        },
      ];
      const validColumn = validColumns.find((data) => data.column === selector);
      if (validColumn) {
        selector = validColumn.columnDb;
      } else {
        selector = 'given_name';
      }
    }
  }

  const page = skip / take + 1;

  const users = await UsersService.getUsers(
    page,
    take,
    searchText,
    selector,
    desc
  );

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
  return NextResponse.json(res);
}

/**
 * Delete a user
 * @param request
 * @returns
 */
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await UsersService.deleteUser(id);
  return NextResponse.json({});
}
