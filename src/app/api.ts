import { FormAuthValues } from '../type/common';
import { TOKEN_NAME } from './AuthWrapper';

type AuthLoginRes = { access_token?: string };

function checkLoginResponse(data: AuthLoginRes) {
  if (data?.access_token) {
    return true;
  }
  throw new Error('Ошибка при получение токена');
}

function checkResponse(response: Response) {
  if (!response.ok) {
    throw response;
  }
}

export class Api {
  handleError(error: Response) {
    if (error.status === 401) {
      console.log('Ошибка авторизации');
    }
  }

  async login(loginData: FormAuthValues) {
    try {
      const response = await fetch(`/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(loginData)
      });

      checkResponse(response);

      const data = await response.json();
      checkLoginResponse(data);

      localStorage.setItem(TOKEN_NAME, data.access_token);
      return true;
    } catch (error: Error | Response | unknown) {
      if (error instanceof Response) {
        this.handleError(error);
      }
      console.error(error);
    }
  }

  get() {
    console.log('isGetMethod');
  }
}
