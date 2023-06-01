import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          audience: process.env.AUTH0_API_AUDIENCE_URL, // AUTH0_AUDIENCE
        },
      });
    } catch (error: any) {
      res.status(error.status || 400).end(error.message);
    }
  },
});