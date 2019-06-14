import HttpRequest from '@/libs/axios'
import { BASE_URL } from '../../vue.config'
const axios = new HttpRequest(BASE_URL)
// const axios = new HttpRequest('')
export default axios
