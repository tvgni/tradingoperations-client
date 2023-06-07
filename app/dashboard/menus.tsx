/*export const navigation = [
  { id: 1, text: 'Dashboard', icon: 'product' },
  { id: 2, text: 'Employees', icon: 'card' },
  { id: 3, text: 'Reports', icon: 'chart' },
];*/

export const menuTrader = [{ id: 1, text: 'Dashboard', icon: 'product' }];

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

export const text =
  '<h2><b>Drawer Demo</b></h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Penatibus et magnis dis parturient. Eget dolor morbi non arcu risus. Tristique magna sit amet purus gravida quis blandit. Auctor urna nunc id cursus metus aliquam eleifend mi in. Tellus orci ac auctor augue mauris augue neque gravida. Nullam vehicula ipsum a arcu. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Cursus in hac habitasse platea dictumst. Egestas dui id ornare arcu. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p><p>Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Neque volutpat ac tincidunt vitae semper quis lectus. Sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Amet cursus sit amet dictum sit amet justo donec enim. Vestibulum rhoncus est pellentesque elit ullamcorper. Id aliquet risus feugiat in ante metus dictum at.</p>';
