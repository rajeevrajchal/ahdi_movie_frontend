import { RouteInterface } from '../../../route/routeInterface';
import Dashboard from '../views/dashboard';
import Users from '../views/users';
import Movies from '../views/movies';
import Suggestion from '../views/suggestions';
import Donation from '../views/Donation';

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
    path: '/admin/suggestion',
    component: Suggestion,
    isAuth: true,
    exact: true,
  },
  {
    path: '/admin/donation',
    component: Donation,
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
