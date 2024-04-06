import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import PropTypes from 'prop-types';

 const PrivateRoute = ({ component: Component, redirectTo = '/', ...rest }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired, 
  redirectTo: PropTypes.string,
};


export default PrivateRoute;

