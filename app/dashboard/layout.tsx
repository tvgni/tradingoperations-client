import './style.css';
import { user } from '@/utils/auth0.page';
import MenuLeft from './navigations';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSession = await user();
  return <MenuLeft session={userSession}>{children}</MenuLeft>;
}
