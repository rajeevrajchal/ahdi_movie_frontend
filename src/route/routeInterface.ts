import React from 'react';

export interface RouteInterface {
  path: string;
  component: React.FC;
  isAuth?: boolean;
  isRole?: string;
  exact: boolean;
}

export interface RoutePropsInterface {
  routeItems: RouteInterface[];
}
