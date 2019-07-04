import HttpRequest from '@/libs/axios'
import { MAINHOST } from './../../vue.config'
const BASE_URL = process.env.NODE_ENV === 'production' ? MAINHOST : './'
const axios = new HttpRequest(BASE_URL)
// const axios = new HttpRequest('')
export default axios
