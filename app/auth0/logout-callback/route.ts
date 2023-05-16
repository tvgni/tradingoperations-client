import { redirect } from 'next/navigation';

export async function GET() {
  // remove session and cookies
  redirect('/');
}
