import { RouteInterface } from '../../../route/routeInterface';
import Dashboard from '../views/dashboard';
import Users from '../views/users';
import Movies from '../views/movies';

const adminRoute: RouteInterface[] = [
  {
    path: '/admin/users',
    component: Users,
    exact: true,
  },
  {
    path: '/admin/movies',
    component: Movies,
    exact: true,
  },
  {
    path: '',
    component: Dashboard,
    exact: true,
  },
];

export default adminRoute;
