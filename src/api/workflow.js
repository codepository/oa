import axios from '@/libs/api.request'
export const findTask = (data) => {
  return axios.request({
    url: '/workflow/process/findTaskByToken',
    data,
    method: 'post'
  })
}
