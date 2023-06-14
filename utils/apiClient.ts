import notify from 'devextreme/ui/notify';

export async function APIClient<TResponse>(
  method: string,
  path: string,
  data:
    | {
        queryParams?: any;
        body?: any;
      }
    | null
    | undefined = null,
  notifyData: {
    successText: string;
    errorText: string;
  }
): Promise<TResponse> {
  // Add query params
  let queryParams: URLSearchParams = new URLSearchParams();
  if (data?.queryParams) {
    queryParams = new URLSearchParams(data?.queryParams);
    path = `${path}?`;
  }

  // Request to the api
  const apiUrl = `${path}${queryParams}`;
  let raw = null;
  if (data?.body) {
    raw = JSON.stringify(data?.body);
  }

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const response = await fetch(apiUrl, {
    method,
    body: raw,
    headers,
  });

  const jsonBody = await response.json();

  notify(
    {
      message: `${
        response.ok
          ? notifyData.successText
          : notifyData.errorText + ' | ' + jsonBody?.message
      }`,
      width: 450,
      position: 'bottom center',
    },
    response.ok ? 'success' : 'error',
    2000
  );

  return jsonBody;
}
