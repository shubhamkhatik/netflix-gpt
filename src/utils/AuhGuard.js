import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Redirect to the login page if the user is not authenticated
      navigate('/');
    }
  }, [user, navigate]);

  return <>{children}</>;
};

export default AuthGuard;
