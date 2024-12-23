import axios from "axios"
import { API_BASE_URL } from "./constant"

const axios_base_url = axios.create({
    baseURL: API_BASE_URL
})

export default axios_base_url