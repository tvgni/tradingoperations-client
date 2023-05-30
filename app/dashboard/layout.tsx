import MenuLeft from './navigations';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MenuLeft>{children}</MenuLeft>;
}
