import React from 'react';
import { UserEnum } from '../enum/userEnum';

export interface RouteInterface {
  path: string;
  component: React.FC;
  isAuth: boolean;
  isRole?: UserEnum;
  exact: boolean;
}

export interface RoutePropsInterface {
  routeItems: RouteInterface[];
}
