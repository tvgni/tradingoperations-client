export const menuTrader = [
  { id: 1, text: 'Dashboard', icon: 'chart', path: '/dashboard' },
  { id: 2, text: 'Importar Trades', icon: 'product', path: '/dashboard' },
];

export const menuAdmin = [
  {
    id: 1,
    text: 'Dashboard',
    icon: 'product',
    path: '/dashboard',
  },
  { id: 2, text: 'Usuarios', icon: 'card', path: '/dashboard/usuarios' },
];

export const menu = [
  {
    rol: 'Admin',
    menu: menuAdmin,
  },
  {
    rol: 'Trader',
    menu: menuTrader,
  },
];
