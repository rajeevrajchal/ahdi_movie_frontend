import { RouteInterface } from '../../../route/routeInterface';
import Home from '../views/home';
import Schedule from '../views/schedule';

const landing_route: RouteInterface[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/schedule',
    component: Schedule,
    exact: true,
  },
];

export default landing_route;
