import React, { ReactNode, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axiosInstance from 'src/config/axiosConfig';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [auth, setAuth] = useState<boolean | null>(null);
  const [error, setError] = useState<any>(null);

  const checkAuth = async () => {
    try {
      const response = await axiosInstance.get('/auth/check/', {
        withCredentials: true,
      });
      return response.data.message === 'OK';
    } catch (err) {
      setError(err);
      return false;
    }
  };

  useEffect(() => {
    const fetchAuth = async () => {
      const isAuth = await checkAuth();
      setAuth(isAuth);
    };
    fetchAuth();
  }, []);

  if (auth === null) {
    return null;
  }

  if (error) {
    console.error('Authentication error', error);
    return <Navigate to="/login" replace />;
  }

  if (auth === false) {
    console.warn('User not auth');
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
