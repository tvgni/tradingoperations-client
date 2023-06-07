export const menuTrader = [
  { id: 1, text: 'Dashboard', icon: 'chart', path: '/dashboard' },
  { id: 2, text: 'Importar Trades', icon: 'product', path: '/dashboard' },
];

export const menuAdmin = [
  { id: 1, text: 'Dashboard', icon: 'product', path: '/dashboard' },
  { id: 2, text: 'Importar trades', icon: 'card', path: '/dashboard/trades' },
  { id: 3, text: 'Usuarios', icon: 'card', path: '/dashboard/usuarios' },
  { id: 4, text: 'Informes', icon: 'chart', path: '/dashboard/informes' },
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
