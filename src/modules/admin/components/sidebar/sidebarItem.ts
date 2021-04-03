import { UserEnum } from '../../../../enum/userEnum';

export interface sidebarItemsInterface {
  label: string;
  link: string;
  icon: string;
  role: UserEnum[];
}

export const sidebarItems: sidebarItemsInterface[] = [
  {
    label: 'Home',
    link: '/admin',
    icon: 'fa-home',
    role: [UserEnum.super_admin, UserEnum.admin],
  },
  {
    label: 'Users',
    link: '/admin/users',
    icon: 'fa-users',
    role: [UserEnum.super_admin],
  },
  {
    label: 'Movies',
    link: '/admin/movies',
    icon: 'fa-play',
    role: [UserEnum.super_admin, UserEnum.admin],
  },
  {
    label: 'Donation',
    link: '/admin/donation',
    icon: 'fa-money',
    role: [UserEnum.super_admin],
  },
  {
    label: 'Suggestion',
    link: '/admin/suggestion',
    icon: 'fa-comment',
    role: [UserEnum.super_admin, UserEnum.admin],
  },
];
