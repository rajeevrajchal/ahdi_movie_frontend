import { RouteInterface } from '../../../route/routeInterface';
import Home from '../views/home';
import Schedule from '../views/landingSchedule';
import Donate from '../views/donate';
import Play from '../views/play';

const landing_route: RouteInterface[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/play/:movieID',
    component: Play,
    exact: true,
  },
  {
    path: '/schedule',
    component: Schedule,
    exact: true,
  },
  {
    path: '/donate',
    component: Donate,
    exact: true,
  },
];

export default landing_route;
