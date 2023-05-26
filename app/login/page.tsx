import { TestButton } from '@/components';
import BaseComponent from '@/components/Basecomponent';
import { user } from '@/utils/auth0.page';
export default async function Page() {
  const session = await user();

  return (
    <div>
      {/* <a href="/api/auth/login">Login</a> */}
      <br></br>
      {/* <a href="/api/auth/logout">Logout</a> */}

      <BaseComponent value="Hello devs!!!">
        <TestButton value="test"></TestButton>
      </BaseComponent>
      <h4>Profile</h4>
      <pre>{JSON.stringify(session || {}, null, 2)}</pre>
    </div>
  );
}
