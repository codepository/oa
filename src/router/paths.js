/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    name: 'dashboard',
    view: 'Dashboard'
  },
  // ----------------- 审批 ------------------------
  {
    path: '/workflow',
    name: 'workflow',
    view: 'workflow/workflow'
  },
  // ----------------- 通讯录 ------------------------
  {
    path: '/addressbook',
    name: '通讯录',
    view: 'AddressBook/AddressBook'
  },
  {
    path: '/organization',
    name: '组织架构',
    view: 'AddressBook/comp/Organization'
  },
  {
    path: '/role',
    name: '角色管理',
    view: 'AddressBook/comp/Role'
  },
  {
    path: '/addroletree',
    name: '添加角色',
    view: 'AddressBook/comp/role/AddRoleTree'
  },
  {
    path: '/departmentset',
    name: '部门设置',
    view: 'AddressBook/comp/organization/DepartmentSet'
  },
  // ---------------- 考勤系统-----------------------
  {
    path: '/attendance',
    name: 'Attendance',
    view: 'attendance/attendance'
  },
  // ---------------- 注册登陆-----------------------
  {
    path: '/login',
    name: 'login',
    view: 'login/login'
  },
  {
    path: 'registry',
    name: 'registry',
    view: 'login/registry'
  },
  {
    path: '/findPass',
    name: 'findPass',
    view: 'login/findPass'
  },
  {
    path: '/updatePass',
    name: 'updatePass',
    view: 'login/updatePass'
  },
  {
    path: '/addUser',
    name: '添加员工',
    view: 'login/addUser'
  },
  // --------------------  error page ----------------
  {
    path: '*',
    name: '404',
    view: 'error-404'
  },
  // ------------------- 模板-------------------------
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  },
  {
    path: '/test',
    name: 'test',
    view: 'test'
  }
]
