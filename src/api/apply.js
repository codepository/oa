import axios from '@/libs/api.request'
export const getLeave = (id) => {
  return axios.request({
    url: 'http://129.0.97.23:31380/advitem/findById/' + id,
    method: 'get'
  })
}
