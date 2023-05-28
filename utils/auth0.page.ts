import { headers } from 'next/headers';
import { getSession as auth0GetSession } from '@auth0/nextjs-auth0';
import { IncomingMessage, ServerResponse } from 'http';
import { Socket } from 'net';
import { Auth0User, Auth0UserInfo } from '@/models/auth0.model';

const requestResponseIntersector = () => {
  const request = new IncomingMessage(new Socket());
  headers().forEach((v, k) => {
    request.headers[k] = v;
  });
  const res = new ServerResponse(request);
  return { req: request, res };
};

export async function user(): Promise<{
  isAuthenticated: boolean;
  user: Auth0User | null | undefined;
  tokenInfo: Auth0UserInfo | null | undefined;
}> {
  const { req, res } = requestResponseIntersector();

  const session = await auth0GetSession(req, res);

  return {
    isAuthenticated: session ? true : false,
    user: session?.user as Auth0User,
    tokenInfo: {
      accessToken: session?.accessToken,
      accessTokenScope: session?.accessTokenScope,
      accessTokenExpiresAt: session?.accessTokenExpiresAt,
      idToken: session?.idToken,
      token_type: session?.token_type,
    },
  };
}
