import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthorizedProps {
    children: ReactNode;
}

const Authorized: React.FC<AuthorizedProps> = ({ children }) => {
    const token = sessionStorage.getItem('token');
    return token ? <>{children}</> : <Navigate to="/signin" />;
};

export default Authorized;
