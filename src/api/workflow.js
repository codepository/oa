import axios from '@/libs/api.request'
// 保存流程
export const saveProdef = (data) => {
  return axios.request({
    url: '/api/v1/workflow/procdef/saveByToken',
    data,
    method: 'post'
  })
}
// 启动流程
export const startProcInst = (data) => {
  return axios.request({
    url: '/api/v1/workflow/process/startByToken',
    data,
    method: 'post'
  })
}
// 查询需要我审批的流程
export const findTask = (data) => {
  return axios.request({
    url: '/api/v1/workflow/process/findTaskByToken',
    data,
    method: 'post'
  })
}
// 查询当前流程参与审批的所有人
export const findParticipant = (procInstID) => {
  return axios.request({
    url: '/api/v1/workflow/identitylink/findParticipant?procInstID=' + procInstID,
    method: 'get'
  })
}
// 审批
export const completeTask = (data) => {
  return axios.request({
    url: '/api/v1/workflow/task/completeByToken',
    data,
    method: 'post'
  })
}
// 撤回
export const withdrawTask = (data) => {
  return axios.request({
    url: '/api/v1/workflow/task/withdrawByToken',
    data,
    method: 'post'
  })
}
// 查询我发起的流程
export const startByMyself = (data) => {
  return axios.request({
    url: '/api/v1/workflow/process/startByMyself',
    data,
    method: 'post'
  })
}
// 查询抄送我的流程
export const findProcNotify = (data) => {
  return axios.request({
    url: '/api/v1/workflow/process/FindProcNotify',
    data,
    method: 'post'
  })
}
// 查询所有流程定义
export const findProcdef = (data) => {
  return axios.request({
    url: '/api/v1/workflow/procdef/findAll',
    data,
    method: 'post'
  })
}
// ------------------------- 历史纪录 -------------------------
// 查询我审批过的流程
export const findProcHistory = (data) => {
  return axios.request({
    url: '/api/v1/workflow/procHistory/findTaskByToken',
    data,
    method: 'post'
  })
}
// 查询流程参与审批的所有人
export const findParticipantHistory = (procInstID) => {
  return axios.request({
    url: '/api/v1/workflow/identitylinkHistory/findParticipant?procInstID=' + procInstID,
    method: 'get'
  })
}
// 查询我发起的历史流程
export const startHistoryByMyself = (data) => {
  return axios.request({
    url: '/api/v1/workflow/procHistory/startByMyself',
    data,
    method: 'post'
  })
}
// 查询抄送我的流程
export const findProcHistoryNotify = (data) => {
  return axios.request({
    url: '/api/v1/workflow/procHistory/FindProcNotify',
    data,
    method: 'post'
  })
}
