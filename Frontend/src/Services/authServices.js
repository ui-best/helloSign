import axios from "./axios"

const login = async ({ email, password }) => {
    let data = await axios.post("/user/login", { email, password })
    return data.data;
}

const register = async ({ email, password, phone, name, dp }) => {
    let data = await axios.post("/user/signup", { email, password, phone, name, dp })
    return data.data;
}

const getUser = async({token})=>{
    let data = await axios.post("/user/getuser", {jwt:token});
    return data.data
}

const authServices = { login, register,getUser };
export default authServices ;
