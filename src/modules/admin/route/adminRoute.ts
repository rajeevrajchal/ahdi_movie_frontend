import { RouteInterface } from '../../../route/routeInterface';
import Dashboard from '../views/dashboard';
import Users from '../views/users';

const adminRoute: RouteInterface[] = [
  {
    path: '/admin/users',
    component: Users,
    exact: true,
  },
  {
    path: '',
    component: Dashboard,
    exact: true,
  },
];

export default adminRoute;
