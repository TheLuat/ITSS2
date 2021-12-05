import React from 'react';
import ExportForm from './views/base/switches/Switches';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Works = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const ProdLine = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const GroupKPI = React.lazy(() => import('./views/pages/KPI/GroupKPI'));
const EmployeeKPI = React.lazy(() => import('./views/pages/KPI/EmployeeKPI'));

const routes = [
  { path: '/home', exact: true, name: 'Home' },
  { path: '/home/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/home/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/home/theme/colors', name: 'Colors', component: Colors },
  { path: '/home/theme/typography', name: 'Typography', component: Typography },
  { path: '/home/base', name: 'Base', component: ProdLine, exact: true },
  { path: '/home/base/works', name: 'Works', component: Works },
  { path: '/home/base/prodlines', name: 'ProdLine', component: ProdLine },
  { path: '/home/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/home/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/home/base/edit/:id', name: 'Sửa công việc', component: BasicForms },
  { path: '/home/base/editProduct/:id', name: 'Sửa thông tin sản phẩm', component: Jumbotrons },
  { path: '/home/base/editMaterial/:id', name: 'Sửa thông tin nguyên liệu', component: Tooltips },
  { path: '/home/base/export/:id', name: 'Xuất kho', component: Switches },
  { path: '/home/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/home/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/home/base/navs', name: 'Navs', component: Navs },
  { path: '/home/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/home/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/home/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/home/base/switches', name: 'Switches', component: Switches },
  { path: '/home/base/tables', name: 'Quản lý sản phẩm', component: Tables },
  { path: '/home/base/tabs', name: 'Quản lý nguyên liệu', component: Tabs },
  { path: '/home/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/home/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/home/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/home/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/home/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/home/charts', name: 'Charts', component: Charts },
  { path: '/home/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/home/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/home/icons/flags', name: 'Flags', component: Flags },
  { path: '/home/icons/brands', name: 'Brands', component: Brands },
  { path: '/home/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/home/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/home/notifications/badges', name: 'Badges', component: Badges },
  { path: '/home/notifications/modals', name: 'Modals', component: Modals },
  { path: '/home/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/home/widgets', name: 'Widgets', component: Widgets },
  { path: '/home/users', exact: true,  name: 'Users', component: Users },
  { path: '/home/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/group-kpi', name: 'Group KPI', component: GroupKPI},
  { path: '/employee-kpi', name: 'Employee KPI', component: EmployeeKPI}
];

export default routes;
