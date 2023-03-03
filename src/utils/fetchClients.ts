const BASE_URL = 'http://localhost:5000';

type RequestMethod = 'GET';

function request<T>(url: string, method: RequestMethod = 'GET'): Promise<T> {
  const options: RequestInit = { method };

  return fetch(BASE_URL + url, options).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
