import { Auth0User } from '@/models/auth0.model';

async function getProfile(
  headers: Headers
): Promise<{ isAuthenticated: boolean; user: Auth0User | null }> {
  try {
    const data = await fetch(`${process.env.AUTH0_BASE_URL}/api/auth/me`, {
      method: 'GET',
      headers: headers,
    });
    const user = await data.json();
    return {
      isAuthenticated: true,
      user,
    };
  } catch (error) {
    return {
      isAuthenticated: false,
      user: null,
    };
  }
}
export async function _user(headers: Headers) {
  return await getProfile(headers);
}
