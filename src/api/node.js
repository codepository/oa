import axios from '@/libs/api.request'
// ********************* 表格 nodetree **********
export const findAllNodeAsPage = (data) => {
  return axios.request({
    url: '/user/nodetree/findAll',
    data,
    method: 'post'
  })
}
export const findDepartmentWithCompany = (company) => {
  return axios.request({
    url: '/user/nodetree/findDepartmentWithCompany?company=' + company,
    method: 'get'
  })
}
export const hasNodeChildren = (id) => {
  return axios.request({
    url: '/user/nodetree/hasChildren/' + id,
    method: 'get'
  })
}
export const findAllPowerAsTree = (data) => {
  return axios.request({
    url: '/user/nodetree/findAllAsTree',
    data,
    method: 'post'
  })
}
export const saveNewNodeReturn = (data) => {
  return axios.request({
    url: '/user/nodetree/saveReturn',
    data,
    method: 'post'
  })
}
export const saveNewNode = (data) => {
  return axios.request({
    url: '/user/nodetree/saveNew',
    data,
    method: 'post'
  })
}
export const deleteNodeById = (id) => {
  return axios.request({
    url: '/user/nodetree/deleteById/' + id,
    method: 'get'
  })
}
export const updateNode = (data) => {
  return axios.request({
    url: '/user/nodetree/update',
    data,
    method: 'post'
  })
}
// *********************** 节点信息nodeinfo，同用户一对一 *************************
export const findNodeinfoByUserid = (id) => {
  return axios.request({
    url: '/user/nodeinfo/findByUserid/' + id,
    method: 'get'
  })
}
export const saveNodeinfo = (data) => {
  return axios.request({
    url: '/user/nodeinfo/save',
    data,
    method: 'post'
  })
}
export const updateNodeinfo = (data) => {
  return axios.request({
    url: '/user/nodeinfo/update',
    data,
    method: 'post'
  })
}
export const existsNodeinfo = (data) => {
  return axios.request({
    url: '/user/nodeinfo/exists',
    data,
    method: 'post'
  })
}
