import React from 'react';
import { Field, Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { FormAuthValues } from '../type/common';
import { Api } from '../app/api';

const api = new Api();

const AuthPage = () => {
  const navigate = useNavigate();

  const onSubmit = async (values: FormAuthValues) => {
    const res = await api.login(values);

    if (res) {
      navigate('/', { replace: true });
    }
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Авторизация</h2>
            <Field name={'username'}>
              {({ input, meta }) => (
                <div>
                  <label>Имя пользователя</label>
                  <input
                    type="text"
                    {...input}
                    placeholder="Имя пользователя"
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name={'password'}>
              {({ input, meta }) => (
                <div>
                  <label>Пароль</label>
                  <input type="password" {...input} placeholder="Пароль" />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <button type="submit">Войти</button>
          </form>
        )}
      />
    </div>
  );
};

export default AuthPage;
