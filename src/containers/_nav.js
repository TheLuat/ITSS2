import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/home/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['KPI']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'KPI tháng',
    // to: '/home/theme/colors',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'KPI đơn vị',
    // to: '/home/theme/typography',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lí']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lí công việc',
    route: '/home/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Bảng công việc',
        to: '/home/base/works',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dây chuyền công việc',
        to: '/home/base/prodlines',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Thêm công việc',
        to: '/home/base/forms',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Jumbotron',
      //   to: '/home/base/jumbotrons',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'List group',
      //   to: '/home/base/list-groups',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Navs',
      //   to: '/home/base/navs',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Navbars',
      //   to: '/home/base/navbars',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Pagination',
      //   to: '/home/base/paginations',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Popovers',
      //   to: '/home/base/popovers',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Progress',
      //   to: '/home/base/progress-bar',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Switches',
      //   to: '/home/base/switches',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Tables',
      //   to: '/home/base/tables',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Tabs',
      //   to: '/home/base/tabs',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Tooltips',
      //   to: '/home/base/tooltips',
      // },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lí người dùng',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Buttons',
      //   to: '/home/buttons/buttons',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Brand buttons',
      //   to: '/home/buttons/brand-buttons',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Buttons groups',
      //   to: '/home/buttons/button-groups',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Dropdowns',
      //   to: '/home/buttons/button-dropdowns',
      // }
    ],
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Charts',
  //   to: '/home/charts',
  //   icon: 'cil-chart-pie'
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Icons',
  //   route: '/icons',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Free',
  //       to: '/home/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Flags',
  //       to: '/home/icons/flags',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Brands',
  //       to: '/home/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Notifications',
  //   route: '/notifications',
  //   icon: 'cil-bell',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Alerts',
  //       to: '/home/notifications/alerts',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Badges',
  //       to: '/home/notifications/badges',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Modal',
  //       to: '/home/notifications/modals',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Toaster',
  //       to: '/home/notifications/toaster'
  //     }
  //   ]
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Widgets',
  //   to: '/home/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   _tag: 'CSidebarNavDivider'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Login',
  //       to: '/home/login',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Register',
  //       to: '/home/register',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 404',
  //       to: '/home/404',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 500',
  //       to: '/home/500',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Disabled',
  //   icon: 'cil-ban',
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Labels']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label danger',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label info',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-info'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // }
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lí kho',
    route: '/home/base',
    icon: 'cil-people',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Quản lý sản phẩm',
        to: '/home/base/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Quản lý nguyên liệu',
        to: '/home/base/tabs',
      }
    ]
  }
]

export default _nav
