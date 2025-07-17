import { Home, Wallet, FolderTree, Info, Settings } from 'lucide-react';

export const navItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Transactions',
    url: '/dashboard/transactions',
    icon: Wallet,
  },
  {
    title: 'Categories',
    url: '/dashboard/categories',
    icon: FolderTree,
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
    icon: Settings,
  },
  {
    title: 'About',
    url: '/dashboard/about',
    icon: Info,
  },
];
