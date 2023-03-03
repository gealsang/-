// 对外暴露一个函数
// 存储token
export const setToken = (token) => {
    // 持久化存储token
    localStorage.setItem("TOKEN",token);
}
// 获取token
export const getToken = () => {
    return localStorage.getItem("TOKEN");
}

// 清除本地存储的token
export const removeToken=()=>{
    localStorage.removeItem("TOKEN");
}