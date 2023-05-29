import MenuLeft from './Navigations';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MenuLeft>{children}</MenuLeft>;
}
