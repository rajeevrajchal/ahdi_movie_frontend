import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { Context } from '../context';

interface PrivateRouteProps extends RouteProps {
  component: React.FC<RouteProps>;
  name?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { component: Component, ...rest } = props;
  const { state } = useContext(Context);
  const { isLoggedIn } = state;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to={'/admin-login'} />
      }
    />
  );
};

export default PrivateRoute;
