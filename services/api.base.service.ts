import { user } from '@/utils/auth0.page';

async function request<TResponse>(
  method: string,
  path: string,
  data:
    | {
        queryParams?: any;
        body?: any;
      }
    | null
    | undefined = null,
  headers: Headers = new Headers()
): Promise<TResponse> {
  // Attach access token
  const userData = await user();
  headers.append('Authorization', `bearer ${userData.tokenInfo?.accessToken}`);
  headers.append('Content-Type', 'application/json');

  // Add query params
  let queryParams: URLSearchParams = new URLSearchParams();
  if (data?.queryParams) {
    queryParams = new URLSearchParams(data?.queryParams);
    path = `${path}?`;
  }

  // Request to the api
  const apiUrl = `${
    process.env.AUTH0_API_AUDIENCE_URL ?? ''
  }${path}${queryParams}`;

  let raw = null;
  if (data?.body) {
    raw = JSON.stringify(data?.body);
  }

  const response = await fetch(apiUrl, {
    method,
    headers,
    body: raw,
  });
  // todo: Validar errores de servidor
  if (response.status !== 204 && response.status !== 201) {
    return await response.json();
  }
  return new Promise((resolve) => {
    resolve({} as TResponse);
  });
}

const ApiService = {
  get: <TResponse>(path: string, queryParams = {}) =>
    request<TResponse>('GET', path, { queryParams }),

  post: <TResponse>(path: string, body: any = {}, queryParams = null) =>
    request<TResponse>('POST', path, { body, queryParams }),

  put: <TResponse>(path: string, body: any = {}, queryParams = null) =>
    request<TResponse>('PUT', path, { body, queryParams }),

  delete: <TResponse>(path: string, body: any = {}, queryParams = null) =>
    request<TResponse>('DELETE', path, { body, queryParams }),
};

export default ApiService;
