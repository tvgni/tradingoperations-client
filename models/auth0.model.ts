export interface Auth0UserInfo {
  user: Auth0User;
  accessToken: string;
  accessTokenScope: string;
  accessTokenExpiresAt: number;
  idToken: string;
  token_type: string;
}

export interface Auth0User {
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  locale: string;
  updated_at: Date;
  email: string;
  email_verified: boolean;
  sub: string;
  sid: string;
}
