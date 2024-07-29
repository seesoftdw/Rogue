import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthorizedProps {
  children: ReactNode;
}

const Authorized: React.FC<AuthorizedProps> = ({ children }) => {
  const token = sessionStorage.getItem('token');
  const location = useLocation();

  // Allow access to the home page for both authenticated and unauthenticated users
  if (location.pathname === '/') {
    return <>{children}</>;
  }

  // Protect other routes
  return token ? <>{children}</> : <Navigate to="/signin" />;
};

export default Authorized;
