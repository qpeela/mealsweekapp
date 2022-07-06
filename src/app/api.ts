import { notification } from 'antd';

import { FormAuthValues } from '../type/common';
import { TOKEN_NAME } from './AuthWrapper';

type AuthLoginRes = { access_token?: string };

const FETCH_OPTIONS = {
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
};

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

function handleError(error: Response) {
    if (error.status === 401) {
        notification.error({ message: 'Ошибка авторизации' });
        console.error('Ошибка авторизации');
    }
}

export const apiLogin = async (loginData: FormAuthValues) => {
    try {
        const response = await fetch(`/auth/login`, {
            ...FETCH_OPTIONS,
            method: 'POST',
            body: JSON.stringify(loginData)
        });

        checkResponse(response);

        const data = await response.json();
        checkLoginResponse(data);

        localStorage.setItem(TOKEN_NAME, data.access_token);
        return true;
    } catch (error: Error | Response | unknown) {
        if (error instanceof Response) {
            handleError(error);
        }
        console.error(error);
    }
};

interface Query {
    [key: string]: any;
}

function getSearchParams(query: Query | undefined) {
    if (query) {
        return '?' + new URLSearchParams(query);
    }
    return '';
}

export const apiGet = async (query: Query | undefined) => {
    try {
        const response = await fetch(`/auth/login${getSearchParams(query)}`, {
            ...FETCH_OPTIONS,
            method: 'GET'
        });

        checkResponse(response);

        const data = await response.json();

        return data;
    } catch (error) {
        if (error instanceof Response) {
            handleError(error);
        }
        console.error(error);
    }
};
