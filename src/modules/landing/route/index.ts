import { RouteInterface } from '../../../route/routeInterface';
import Home from '../views/home';
import Schedule from '../views/landingSchedule';
import Donate from '../views/donate';
import Play from '../views/play';

const landing_route: RouteInterface[] = [
  {
    path: '/',
    component: Home,
    isAuth: false,
    exact: true,
  },
  {
    path: '/play/:movieID',
    component: Play,
    isAuth: false,
    exact: true,
  },
  {
    path: '/schedule',
    component: Schedule,
    isAuth: false,
    exact: true,
  },
  {
    path: '/donate',
    component: Donate,
    isAuth: false,
    exact: true,
  },
];

export default landing_route;
