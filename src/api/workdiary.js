import axios from '@/libs/api.request'
export const findAllDiary = (data) => {
  return axios.request({
    url: '/api/v1/workdiary/project/findall',
    data,
    method: 'POST'
  })
}
