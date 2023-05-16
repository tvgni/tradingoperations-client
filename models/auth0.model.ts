export interface Auth0TokenInfo {
  access_token: string | undefined;
  scope: string | undefined;
  expires_in: number | undefined;
  token_type: string | undefined;
}

export interface Auth0UserInfo {
  email: string | undefined;
  email_verified: boolean | undefined;
  family_name: number | undefined;
  given_name: string | undefined;
  locale: string | undefined;
  name: string | undefined;
  nickname: string | undefined;
  picture: string | undefined;
  sub: string | undefined;
  updated_at: string | undefined;
}
