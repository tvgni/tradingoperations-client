import { redirect } from 'next/navigation';
import { getLoginRedirectUrl } from '../../../utils/auth0';

export async function GET() {
  const url = getLoginRedirectUrl();
  redirect(url);
}
