import { user } from '@/utils/auth0.page';
import MenuLeft from './Navigations';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSession = await user();
  return <MenuLeft user={userSession}>{children}</MenuLeft>;
}
