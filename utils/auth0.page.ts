import { headers } from 'next/headers';
import { Session, getSession as auth0GetSession } from '@auth0/nextjs-auth0';
import { IncomingMessage, ServerResponse } from 'http';
import { Socket } from 'net';

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
  session: Session | null | undefined;
}> {
  const { req, res } = requestResponseIntersector();

  const session = await auth0GetSession(req, res);

  return {
    isAuthenticated: session ? true : false,
    session: session,
  };
}
