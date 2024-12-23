import axios_base_url from "./axios"

export const signupUser = async(e)=>{
    return axios_base_url.post("/auth/register", e)
}

