export interface Auth0UserInfo {
  accessToken: string | undefined;
  accessTokenScope: string | undefined;
  accessTokenExpiresAt: number | undefined;
  idToken: string | undefined;
  token_type: string;
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
  user: Auth0User | null | undefined;
  tokenInfo: Auth0UserInfo | null | undefined;
}
