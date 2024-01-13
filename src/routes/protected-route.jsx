/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export const ProtectedRoute = ({ children, redirectPath = '/' }) => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return children;
};