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
    path: '/leave',
    name: '请假',
    view: 'attendance/leave/leave'
  },
  {
    path: '/apply',
    name: '我的申请',
    view: 'attendance/apply/apply'
  }
]
