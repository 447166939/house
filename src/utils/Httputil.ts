import axios from "axios";
import Router from "next/router";

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
    if (data.code == 403) {
      Router.replace("/login");
    }
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use((config) => {
  const token = localStorage.getItem("x_access_token");
  console.log("token", token);
  if (!token && !whiteList.includes(config.url!)) {
    Router.push("/login");
  }
  if (token && !whiteList.includes(config.url!)) {
    config.headers["accessToken"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
});

// response interceptor
service.interceptors.response.use((response) => {
  if (response.data.code == 0) {
    return response.data;
  } else {
    throw new Error(response.data.message);
  }
}, err);

// const http = {

// }

export { service as axios };
