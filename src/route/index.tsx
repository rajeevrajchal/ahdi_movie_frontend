import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteInterface, RoutePropsInterface } from './routeInterface';

const Routes: React.FC<RoutePropsInterface> = (props) => {
  const { routeItems } = props;
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routeItems.map((route: RouteInterface, key: number) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={key}
          />
        ))}
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
