import { useAppContext } from '../context/appContext_81';
import { Navigate } from 'react-router-dom';

const ProtectedRoute_81 = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to='/landing' />;
  }
  return children;
};

export default ProtectedRoute_81;
