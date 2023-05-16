import { cookies } from 'next/headers';
import { Auth0TokenInfo, Auth0UserInfo } from '@/models/auth0.model';
// import webAuth from '../../../utils/auth0';

export default async function Page() {
  // if (typeof window !== "undefined") {

  // const getAuth0TokenData = (): Promise<Auth0TokenInfo> => {
  //   return new Promise<Auth0TokenInfo>((resolve, reject) => {
  //     webAuth.parseHash({ hash: window.location.hash, state: 'web-site-app', nonce: '123456789' }, (err, authResult) => {
  //       err ? reject(err) : resolve(authResult as Auth0TokenInfo);
  //     });
  //   });
  // }

  // const getUserInfo = (accessToken: string): Promise<Auth0UserInfo> => {
  //   return new Promise<Auth0UserInfo>((resolve, reject) => {
  //     webAuth.client.userInfo(accessToken, (err, user) => {
  //       err ? reject(err) : resolve(user as Auth0UserInfo);
  //     });
  //   });
  // }

  // const tokenData = await getAuth0TokenData();
  // console.log(tokenData);
  // const userData = await getUserInfo(tokenData.accessToken ?? '');
  // console.log(userData);
  // }

  return (
    <>
      <h1>testing</h1>
    </>
  );
}
