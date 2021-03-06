import {
  login,
  getUserInfo,
  logout
} from '@/api/user'
import { setToken, getToken } from '@/libs/util'
import router from '@/router'
import { set, toggle } from '@/utils/vuex'
export default {
  state: {
    drawer: true,
    color: 'success',
    image: 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
    sidebarBackgroundColor: 'rgba(27, 27, 27, 0.74)',
    userName: '',
    userId: '',
    email: '',
    avatar: './../../../public/img/logo.png',
    token: getToken(),
    hasGetInfo: false,
    roles: null,
    phone: '',
    department: '', // 所属部门
    company: '',
    post: '',
    position: '',
    permission: '',
    departments: null// 分管部门
  },
  mutations: {
    setDrawer: set('drawer'),
    setImage: set('image'),
    setColor: set('color'),
    toggleDrawer: toggle('drawer'),
    setPermission (state, permission) {
      state.permission = permission
    },
    setDepartment (state, department) {
      state.department = department
    },
    setDepartments (state, departments) {
      state.departments = departments
    },
    setRoles (state, roles) {
      state.roles = roles
    },
    setPosition (state, position) {
      state.position = position
    },
    setCompany (state, company) {
      state.company = company
    },
    setPost (state, post) {
      state.post = post
    },
    setPhone (state, phone) {
      state.phone = phone
    },
    // *******************  以上为自定义 ****************
    setAvator (state, avatar) {
      state.avatar = avatar
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setEmail (state, email) {
      state.email = email
    },
    setToken (state, token) {
      // console.log('mutation setToken')
      state.token = token
      setToken(token)
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    }
  },
  actions: {
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          // console.log(state.token)
          getUserInfo(state.token).then(res => {
            const data = res.data
            if (!data.userid) {
              commit('setToken', '')
              router.push({
                name: 'login'
              })
              // this.$router.push({
              //   name: 'login'
              // })
            }
            commit('setUserId', data.userid)
            commit('setDepartment', data.department)
            commit('setCompany', data.company)
            commit('setPost', data.post)
            commit('setEmail', data.email)
            commit('setPhone', data.phone)
            commit('setAvator', data.avatar)
            commit('setUserName', data.username)
            commit('setPosition', data.position)
            commit('setRoles', data.roles)
            commit('setPermission', data.permission)
            commit('setHasGetInfo', true)
            commit('setDepartments', data.departments)
            // 以下为自定义
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    },
    // 登录
    handleLogin ({ commit }, { userName, password }) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password
        }).then(res => {
          // console.log(res)
          const data = res.data
          // console.log(data)
          if (res.data.ok) {
            commit('setToken', data.message)
            resolve()
          } else {
            alert(data.message)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(res => {
          if (res.data.ok) {
            commit('setToken', '')
            commit('setRoles', [])
            resolve()
          } else {
            alert(res.data.message)
          }
        }).catch(err => {
          reject(err)
        })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        // commit('setToken', '')
        // resolve()
      })
    }
  }
}
