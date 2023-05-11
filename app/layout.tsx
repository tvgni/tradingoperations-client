import './globals.css';
import 'devextreme/dist/css/dx.material.blue.light.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'dx-viewport'}>{children}</body>
    </html>
  );
}
