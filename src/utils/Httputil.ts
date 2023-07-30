import axios from "axios";

// 创建 axios 实例
const baseUrl = "/api";
const whiteList = ["/user/login", "/user/register"];
const service = axios.create({
  baseURL: baseUrl,
  timeout: 60000 // 请求超时时间
});

const err = (error: any) => {
  if (error.response) {
    const errorResponse = error.response;
    const data = errorResponse.data;
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use((config) => {
  const token = localStorage.getItem("x_access_token");
  if (token && !whiteList.includes(config.url!)) {
    console.log("intercept", config.url);
    config.headers["accessToken"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
});

// response interceptor
service.interceptors.response.use((response) => {
  return response.data;
}, err);

// const http = {

// }

export { service as axios };
