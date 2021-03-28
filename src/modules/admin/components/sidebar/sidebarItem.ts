export interface sidebarItemsInterface {
  label: string;
  link: string;
  icon: string;
}

export const sidebarItems: sidebarItemsInterface[] = [
  {
    label: 'Home',
    link: '/admin',
    icon: 'fa-home',
  },
  {
    label: 'Users',
    link: '/admin/users',
    icon: 'fa-users',
  },
  {
    label: 'Movies',
    link: '/admin/movies',
    icon: 'fa-play',
  },
  {
    label: 'Donation',
    link: '/admin/donation',
    icon: 'fa-money',
  },
  {
    label: 'Suggestion',
    link: '/admin/suggestion',
    icon: 'fa-comment',
  },
];
