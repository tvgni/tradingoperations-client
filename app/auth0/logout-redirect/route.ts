import { redirect } from 'next/navigation';
import webAuth from '../../../utils/auth0';

export async function GET() {
  const url = webAuth.client.buildLogoutUrl({
    returnTo: 'http://localhost:3000/auth0/logout-callback',
  });

  redirect(url);
}
