import { RouteInterface } from './routeInterface';

import Admin from '../modules/admin';
import Landing from '../modules/landing';
import Auth from '../modules/auth';

const module_route: RouteInterface[] = [
  {
    path: '/admin',
    component: Admin,
    isAuth: true,
    exact: false,
  },
  {
    path: '/admin-login',
    component: Auth,
    isAuth: false,
    exact: true,
  },
  {
    path: '',
    component: Landing,
    isAuth: false,
    exact: false,
  },
];

export default module_route;
