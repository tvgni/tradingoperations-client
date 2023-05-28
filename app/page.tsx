import { user } from '@/utils/auth0.page';

export default async function Home() {
  const userinfo = await user();

  return (
    <main className="">
      {userinfo.isAuthenticated && <a href="api/auth/logout">Logout</a>}
      <pre>{JSON.stringify(userinfo || {}, null, 2)}</pre>
    </main>
  );
}
