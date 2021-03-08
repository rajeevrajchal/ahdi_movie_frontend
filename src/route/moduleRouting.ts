import { RouteInterface } from './routeInterface';
// import Landing from '../modules/landing';
import Admin from '../modules/admin';
import Landing from '../modules/landing';

const module_route: RouteInterface[] = [
  {
    path: '/admin',
    component: Admin,
    exact: false,
  },
  {
    path: '',
    component: Landing,
    exact: false,
  },
];

export default module_route;
