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
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use((config) => {
  const token = localStorage.getItem("x_access_token");
  if (token && !whiteList.includes(config.url!)) {
    console.log("intercept", config.url);
    config.headers["accessToken"] =
      "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyQ29udGV4dCI6IntcImlkXCI6NCxcInVzZXJuYW1lXCI6XCJ4aW5nemFpXCIsXCJlbWFpbFwiOlwiNDQ3MTY2OTM5QHFxLmNvbVwiLFwibG9uZ1Rlcm1cIjpmYWxzZSxcInJvbGVcIjpcIkFQUF9VU0VSXCJ9Iiwic3ViIjoieGluZ3phaSIsImV4cCI6MTY5MDkwMzE5Mn0.h3kxRImRJzW7s4cG7KspQlyM-qXrQy2svxsix_aKLss"; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
});

// response interceptor
service.interceptors.response.use((response) => {
  if (response.data.code == 403) {
    Router.push("/login");
  }
  return response.data;
}, err);

// const http = {

// }

export { service as axios };
