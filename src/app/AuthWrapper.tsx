import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthProps {
  children: ReactNode;
}

export const TOKEN_NAME = 'jwtToken';

export const AuthWrapper = (props: AuthProps) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const jwtToken = localStorage.getItem(TOKEN_NAME);

    if (!jwtToken) {
      navigate('/auth', { replace: true });
    }
  }, [navigate]);

  return <>{props.children}</>;
};
