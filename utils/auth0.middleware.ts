import { Auth0User } from '@/models/auth0.model';

async function getProfile(
  headers: Headers
): Promise<{ isAuthenticated: boolean; user: Auth0User | null }> {
  try {
    const data = await fetch(`http://localhost:3000/api/auth/me`, {
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
      isAuthenticated: true,
      user: null,
    };
  }
}
export async function _user(headers: Headers) {
  return await getProfile(headers);
}
