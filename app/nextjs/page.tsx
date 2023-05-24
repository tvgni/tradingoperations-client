import { user } from '@/utils/auth0';

export default async function Page() {
  const session = await user();

  console.log(session?.user);

  return (
    <div>
      <h1>Profile</h1>
      <h4>Profile</h4>
      <pre>{JSON.stringify(session || {}, null, 2)}</pre>
    </div>
  );
}
