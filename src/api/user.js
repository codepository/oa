import axios from '@/libs/api.request'
export const login = ({ userName, password }) => {
  return axios.request({
    url: '/user/login',
    data: { name: userName, password: password },
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: '/user/getUserInfoWithToken',
    params: {
      token
    },
    method: 'get'
  })
}

export const saveUser = (data) => {
  return axios.request({
    url: '/user/save',
    data,
    method: 'post'
  })
}

export const findPass = (data) => {
  return axios.request({
    url: '/user/findPassword',
    data,
    method: 'post'
  })
}

export const updatePass = (data) => {
  return axios.request({
    url: '/user/updatePass',
    data,
    method: 'post'
  })
}