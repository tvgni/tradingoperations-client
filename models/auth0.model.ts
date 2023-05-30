export interface Auth0UserInfo {
  accessToken?: string;
  accessTokenScope?: string;
  accessTokenExpiresAt?: number;
  idToken?: string;
  token_type?: string;
}

export interface Auth0User {
  role: string;
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

export interface authUser {
  isAuthenticated: boolean;
  user?: Auth0User;
  tokenInfo?: Auth0UserInfo;
}
