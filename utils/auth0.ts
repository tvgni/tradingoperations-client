import { headers } from 'next/headers';
import { getSession as auth0GetSession } from '@auth0/nextjs-auth0';
import { IncomingMessage, ServerResponse } from 'http';
import { Socket } from 'net';

// export function getLoginRedirectUrl(): string {
//   const auth0Url = `https://${process.env.AUTH0_DOMAIN}/authorize`;

//   const parameters = new URLSearchParams({
//     response_type: 'code',
//     client_id: process.env.AUTH0_CLIENT_ID ?? '',
//     redirect_uri: process.env.AUTH0_LOGIN_CALLBACK ?? '',
//     scope: 'openid profile email',
//     state: 'web-site-app',
//   });
//   return `${auth0Url}?${parameters}`;
// }

// export async function getAuth0TokenFromAuthorazionCode(
//   authorazioncode: string
// ): Promise<Auth0TokenInfo> {
//   const data = await fetch(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//     },
//     body: new URLSearchParams({
//       grant_type: 'authorization_code',
//       client_id: process.env.AUTH0_CLIENT_ID ?? '',
//       client_secret: process.env.AUTH0_CLIENT_SECRET ?? '',
//       code: authorazioncode,
//       redirect_uri: process.env.AUTH0_LOGIN_CALLBACK ?? '',
//     }),
//   });
//   const tokenData = await data.json();
//   return tokenData as Auth0TokenInfo;
// }

const requestResponseIntersector = () => {
  const request = new IncomingMessage(new Socket());
  headers().forEach((v, k) => {
    console.log(v);
    console.log(k);

    request.headers[k] = v;
  });
  const res = new ServerResponse(request);
  return { req: request, res };
};

export async function user() {
  const { req, res } = requestResponseIntersector();

  const session = await auth0GetSession(req, res);
  return session;
}
