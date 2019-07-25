/**
 *   {
    path: '/workcomplete',
    name: '我审批的',
    view: 'work/complete/complete',
    meta: {
      keepAlive: true                // 表示是否缓存，默认不缓存
      access: ['开发人员']            // 表示需要的权限
    }
  },
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
  {
    path: '/worknotifier',
    name: '抄送我的',
    view: 'work/notifier/notifier',
    meta: {
      keepAlive: true
    }
  },
  // ------------------工作日志---------------------
  {
    path: '/workdiary',
    name: '工作日志',
    view: 'diary/diary'
  },
  {
    path: '/workdiaryupdate',
    name: '更新工作日志',
    view: 'diary/diary-update'
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
    view: 'AddressBook/comp/role/AddRoleTree',
    meta: {
      access: ['OA管理员', '开发人员']
    }
  },
  {
    path: '/updateroletree',
    name: '修改角色',
    view: 'AddressBook/comp/role/UpdateRoleTree',
    meta: {
      access: ['OA管理员', '开发人员']
    }
  },
  {
    path: '/roleadduser',
    name: '角色添加成员',
    view: 'AddressBook/comp/role/AddUser',
    meta: {
      access: ['OA管理员', '开发人员']
    }
  },
  {
    path: '/departmentset',
    name: '部门设置',
    view: 'AddressBook/comp/organization/DepartmentSet'
  },
  {
    path: '/addnode',
    name: '添加子部门',
    view: 'AddressBook/comp/organization/AddNode'
  },
  {
    path: '/uploaduser',
    name: '导入员工',
    view: 'AddressBook/comp/organization/UploadUser'
  },
  {
    path: '/userdepartmentset',
    name: '用户部门修改',
    view: 'AddressBook/comp/organization/UserDepartmentSet'
  },
  // ---------------- 考勤系统-----------------------
  {
    path: '/attendance',
    name: 'Attendance',
    view: 'attendance/attendance'
  },
  // ----------------  控制台 ----------------------
  {
    path: '/console',
    name: '控制台',
    view: 'console/console'
  },
  {
    path: '/saveprocdef', // 新增流程
    name: '新增流程',
    view: 'console/workflow/prodef-save',
    meta: {
      access: ['开发人员']
    }
  },
  {
    path: '/saveprocdefactive', // 动态新增流程
    name: '动态新增流程',
    view: 'console/workflow/prodef-active-add',
    meta: {
      access: ['开发人员']
    }
  },
  {
    path: '/workflowconsole',
    name: '流程管理',
    view: 'console/workflow/workflow',
    meta: {
      access: ['开发人员']
    }
  },
  // ---------------- 注册登陆 用户修改-----------------------
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
  {
    path: '/userProfile',
    name: '用户信息',
    view: 'user/userProfile'
  },
  {
    path: '/companyProfile',
    name: '公司信息',
    view: 'AddressBook/comp/companyProfile'
  },
  // ------------------流程申请 ------------------------------
  {
    path: '/apply',
    name: '我发起的',
    view: 'work/apply/apply',
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/leave',
    name: '请假',
    view: 'work/apply/leave/leave'
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
