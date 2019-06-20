/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
// 多级path 会报错
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    name: 'dashboard',
    view: 'Dashboard'
  },
  // ----------------- 审批 ------------------------
  {
    path: '/work',
    name: 'workflow',
    view: 'work/work'
  },
  {
    path: '/workcomplete',
    name: '我审批的',
    view: 'work/complete/complete'
  },
  {
    path: '/workcompletepage',
    name: '流程审批页面',
    view: 'work/complete/complete-page'
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
    path: '/roleadduser',
    name: '角色添加成员',
    view: 'AddressBook/comp/role/AddUser'
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
    view: 'error-404'
  }
]
