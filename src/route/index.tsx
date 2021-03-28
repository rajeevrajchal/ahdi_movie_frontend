import React, { useContext, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { RouteInterface, RoutePropsInterface } from './routeInterface';
import PrivateRoute from './privateRoute';
import { Context } from '../context';
import { checkAuthentication } from '../modules/auth/services/loginAction';

const Routes: React.FC<RoutePropsInterface> = (props) => {
  const { routeItems } = props;
  const { dispatch } = useContext(Context);
  const history = useHistory();
  const reAuthenticate = () => {
    checkAuthentication(dispatch, history);
  };

  useEffect(() => {
    reAuthenticate();
  }, [dispatch]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routeItems.map((route: RouteInterface, index: number) =>
          route.isAuth ? (
            <PrivateRoute
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ) : (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          )
        )}
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
