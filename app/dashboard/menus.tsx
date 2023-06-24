export const menuTrader = [
  { id: 1, text: 'Dashboard', icon: 'chart', path: '/dashboard' },
  { id: 2, text: 'Importar Trades', icon: 'product', path: '/trades' },
];

export const menuAdmin = [
  { id: 1, text: 'Dashboard', icon: 'product', path: '/dashboard' },
  { id: 2, text: 'Usuarios', icon: 'card', path: '/usuarios' },
  { id: 3, text: 'Importar trades', icon: 'card', path: '/trades' },
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
