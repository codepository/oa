import axios from '@/libs/api.request'
// *********************** 角色树 (有哪些角色)*************************
export const findAllRoletreeAstree = (data) => {
  return axios.request({
    url: '/user/roletree/findAllAstree',
    data,
    method: 'post'
  })
}
export const existsRoletree = (data) => {
  return axios.request({
    url: '/user/roletree/exists',
    data,
    method: 'post'
  })
}
export const saveRoletree = (data) => {
  return axios.request({
    url: '/user/roletree/save',
    data,
    method: 'post'
  })
}
export const deleteRoletreeById = (id) => {
  return axios.request({
    url: '/user/roletree/deleteById/' + id,
    method: 'get'
  })
}
export const hasRoleChildren = (id) => {
  return axios.request({
    url: '/user/roletree/hasChildren/' + id,
    method: 'get'
  })
}
// ************************** role ************************
export const findRoles = (data) => {
  return axios.request({
    url: '/user/role/findRoles',
    data,
    method: 'post'
  })
}
export const saveRole = (data) => {
  return axios.request({
    url: '/user/role/save',
    data,
    method: 'post'
  })
}
export const deleteRole = (data) => {
  return axios.request({
    url: '/user/role/delete',
    data,
    method: 'post'
  })
}
