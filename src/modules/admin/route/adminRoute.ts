import { RouteInterface } from '../../../route/routeInterface';
import Dashboard from '../views/dashboard';
import Users from '../views/users';
import Movies from '../views/movies';

const adminRoute: RouteInterface[] = [
  {
    path: '/admin/users',
    component: Users,
    isAuth: true,
    exact: true,
  },
  {
    path: '/admin/movies',
    component: Movies,
    isAuth: true,
    exact: true,
  },
  {
    path: '',
    component: Dashboard,
    isAuth: true,
    exact: true,
  },
];

export default adminRoute;
