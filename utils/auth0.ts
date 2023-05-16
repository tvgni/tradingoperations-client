import { Auth0TokenInfo } from '@/models/auth0.model';
import { WebAuth } from 'auth0-js';

export default new WebAuth({
  domain: 'dev-s5ykmcdlm10qbfcs.us.auth0.com',
  clientID: 'AmIicifN2EjejwvNOoENlSst1l9nOzRc',
  state: 'web-site-app',
});

export function getLoginRedirectUrl(): string {
  const auth0Url = `https://${process.env.AUTH0_DOMAIN}/authorize`;

  const parameters = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.AUTH0_CLIENT_ID ?? '',
    redirect_uri: process.env.AUTH0_LOGIN_CALLBACK ?? '',
    scope: 'openid profile email',
    state: 'web-site-app',
  });
  return `${auth0Url}?${parameters}`;
}

export async function getAuth0TokenFromAuthorazionCode(
  authorazioncode: string
): Promise<Auth0TokenInfo> {
  const data = await fetch(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: process.env.AUTH0_CLIENT_ID ?? '',
      client_secret: process.env.AUTH0_CLIENT_SECRET ?? '',
      code: authorazioncode,
      redirect_uri: process.env.AUTH0_LOGIN_CALLBACK ?? '',
    }),
  });
  const tokenData = await data.json();
  return tokenData as Auth0TokenInfo;
}
